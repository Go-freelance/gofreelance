import { Request, Response } from "express";
import {
  initEmailService,
  sendAdminNotificationNewThirdParty,
} from "../services/EmailService";
import { initSheetService, appendThirdParty } from "../services/SheetService";
import { processAppointment } from "../services/AppointmentService";
import { processContact } from "../services/ContactService";
import { processClientConfirmation } from "../services/ClientConfirmationService";
import { ThirdPartySubmission } from "../types/thirdParty";
import { EmailData } from "../types/email";
import { handleFileUpload } from "../middleware/fileUpload";
import { validateEmailData, validateContactData } from "../utils/validation";
import {
  sendSuccessResponse,
  sendValidationErrorResponse,
  sendServerErrorResponse,
} from "../utils/apiResponses";
import fs from "fs";

// Type pour la requête avec fichier uploadé
interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

// Initialiser les services au démarrage du serveur
initEmailService();
initSheetService();

async function sendAdminNotificationHandler(req: Request, res: Response) {
  try {
    const emailData: EmailData = req.body;

    if (!validateEmailData(emailData)) {
      return sendValidationErrorResponse(res);
    }

    const result = await processAppointment(emailData);

    if (result.success) {
      return sendSuccessResponse(res, result.message);
    } else {
      return sendServerErrorResponse(res, result.message);
    }
  } catch (error) {
    console.error("Erreur dans sendAdminNotificationHandler:", error);
    return sendServerErrorResponse(
      res,
      "Erreur serveur lors de l'enregistrement du rendez-vous.",
      error
    );
  }
}

async function sendClientEmailConfirmationHandler(req: Request, res: Response) {
  try {
    const emailData: EmailData = req.body;

    if (!validateEmailData(emailData)) {
      return sendValidationErrorResponse(res);
    }

    const result = await processClientConfirmation(emailData);

    if (result.success) {
      return sendSuccessResponse(res, result.message);
    } else {
      return sendServerErrorResponse(res, result.message);
    }
  } catch (error) {
    console.error("Erreur dans sendClientConfirmationHandler:", error);
    return sendServerErrorResponse(
      res,
      "Erreur serveur lors de l'envoi de l'email.",
      error
    );
  }
}

async function sendAdminEmailNewContactHandler(req: Request, res: Response) {
  try {
    const emailData: EmailData = req.body;

    if (!validateContactData(emailData)) {
      return sendValidationErrorResponse(res);
    }

    const result = await processContact(emailData);

    if (result.success) {
      return sendSuccessResponse(res, result.message);
    } else {
      return sendServerErrorResponse(res, result.message);
    }
  } catch (error) {
    console.error("Erreur dans sendAdminEmailNewContactHandler:", error);
    return sendServerErrorResponse(
      res,
      "Erreur serveur lors de l'enregistrement du contact.",
      error
    );
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
        "Erreur dans sendAdminNotificationNewThirdPartyHandler:",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Erreur lors du traitement de la demande",
      });
    }
  });
}

export default {
  sendAdminNotification: sendAdminNotificationHandler,
  sendAdminNotificationNewContact: sendAdminEmailNewContactHandler,
  sendClientConfirmation: sendClientEmailConfirmationHandler,
  sendAdminNotificationNewThirdParty: sendAdminNotificationNewThirdPartyHandler,
};
