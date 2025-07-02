import { Request, Response } from "express";
import {
  initEmailService,
  sendAdminNotification,
  sendClientConfirmation,
  sendAdminNotificationNewThirdParty,
  sendContactEmail,
} from "../services/EmailService";
import { initSheetService, appendThirdParty } from "../services/SheetService";
import { ThirdPartySubmission } from "../types/thirdParty";
import { EmailData } from "../types/email";
import { handleFileUpload } from "../middleware/fileUpload";
import fs from "fs";

// Type pour la requête avec fichier uploadé
interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

// Initialiser les services au démarrage du serveur
initEmailService();
initSheetService();

async function sendAdminNotificationHandler(
  req: Request,
  res: Response
) {
  try {
    const emailData: EmailData = req.body;
    if (!validateEmailData(emailData)) {
      return res.status(400).json({
        success: false,
        message:
          "Données invalides. Veuillez vérifier les champs obligatoires.",
      });
    }
    const sent = await sendAdminNotification(emailData);
    if (!sent) {
      return res.status(500).json({
        success: false,
        message: "Erreur lors de l'envoi de l'email de notification.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Email de notification envoyé avec succès.",
    });
  } catch (error) {
    console.error("Erreur dans sendAdminNotificationHandler:", error);
    return res.status(500).json({
      success: false,
      message: "Erreur serveur lors de l'envoi de l'email.",
      error: error instanceof Error ? error.message : "Erreur inconnue",
    });
  }
}

async function sendClientConfirmationHandler(
  req: Request,
  res: Response
) {
  try {
    const emailData: EmailData = req.body;
    if (!validateEmailData(emailData)) {
      return res.status(400).json({
        success: false,
        message:
          "Données invalides. Veuillez vérifier les champs obligatoires.",
      });
    }
    const sent = await sendClientConfirmation(emailData);
    if (!sent) {
      return res.status(500).json({
        success: false,
        message: "Erreur lors de l'envoi de l'email de confirmation.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Email de confirmation envoyé avec succès.",
    });
  } catch (error) {
    console.error("Erreur dans sendClientConfirmationHandler:", error);
    return res.status(500).json({
      success: false,
      message: "Erreur serveur lors de l'envoi de l'email.",
      error: error instanceof Error ? error.message : "Erreur inconnue",
    });
  }
}

async function sendAdminEmailNewContactHandler(
  req: Request,
  res: Response
) {
  try {
    const emailData: EmailData = req.body;
    if (!validateEmailData(emailData)) {
      return res.status(400).json({
        success: false,
        message:
          "Données invalides. Veuillez vérifier les champs obligatoires.",
      });
    }
    const sent = await sendContactEmail(emailData);
    if (!sent) {
      return res.status(500).json({
        success: false,
        message: "Erreur lors de l'envoi de l'email de contact.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Email de contact envoyé avec succès.",
    });
  } catch (error) {
    console.error("Erreur dans sendAdminEmailNewContactHandler:", error);
    return res.status(500).json({
      success: false,
      message: "Erreur serveur lors de l'envoi de l'email.",
      error: error instanceof Error ? error.message : "Erreur inconnue",
    });
  }
}

function sendAdminNotificationNewThirdPartyHandler(
  req: Request,
  res: Response
) {
  handleFileUpload(req, res, async () => {
    try {
      const reqWithFile = req as RequestWithFile;
      const thirdParty: ThirdPartySubmission = {
        ...reqWithFile.body,
        bankingDetails:
          typeof reqWithFile.body.bankingDetails === "string"
            ? JSON.parse(reqWithFile.body.bankingDetails)
            : reqWithFile.body.bankingDetails,
        responsables: reqWithFile.body.responsables
          ? typeof reqWithFile.body.responsables === "string"
            ? JSON.parse(reqWithFile.body.responsables)
            : reqWithFile.body.responsables
          : undefined,
      };
      const logoFile = reqWithFile.file;
      await appendThirdParty(thirdParty);
      const sent = await sendAdminNotificationNewThirdParty(
        thirdParty,
        logoFile
      );
      if (logoFile && logoFile.path) {
        fs.unlink(logoFile.path, (err) => {
          if (err) {
            console.error(
              "Erreur lors de la suppression du fichier logo:",
              err
            );
          }
        });
      }
      if (!sent) {
        return res.status(500).json({
          success: false,
          message: "Erreur lors de l'envoi de l'email de notification",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Email de notification envoyé avec succès",
      });
    } catch (error) {
      console.error(
        "❌ Erreur dans sendAdminNotificationNewThirdPartyHandler:",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Erreur lors du traitement de la demande",
      });
    }
  });
}

function validateEmailData(data: Partial<EmailData>): boolean {
  return !!(
    data &&
    data.name &&
    data.email &&
    data.phone &&
    data.date &&
    data.time &&
    data.service
  );
}

export default {
  sendAdminNotification: sendAdminNotificationHandler,
  sendAdminNotificationNewContact: sendAdminEmailNewContactHandler,
  sendClientConfirmation: sendClientConfirmationHandler,
  sendAdminNotificationNewThirdParty: sendAdminNotificationNewThirdPartyHandler,
};
