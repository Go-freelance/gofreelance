import { Request, Response } from "express";
import EmailService from "../services/EmailService";
import { ThirdPartySubmission } from "../types/thirdParty";
import { EmailData } from "../types/email";
import multer from "multer";
import path from "path";

// Configuration de multer pour le stockage des fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Type pour la requête avec fichier uploadé
interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

/**
 * Contrôleur pour gérer les fonctionnalités d'envoi d'emails
 */
class EmailController {
  /**
   * Envoie une notification de nouveau rendez-vous à l'admini
   */
  public async sendAdminNotification(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const emailData: EmailData = req.body;

      // Valider les données
      if (!this.validateEmailData(emailData)) {
        return res.status(400).json({
          success: false,
          message:
            "Données invalides. Veuillez vérifier les champs obligatoires.",
        });
      }

      // Envoyer l'email via le service
      const emailService = EmailService.getInstance();
      const sent = await emailService.sendAdminNotification(emailData);

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
      console.error(
        "Erreur dans EmailController.sendAdminNotification:",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Erreur serveur lors de l'envoi de l'email.",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      });
    }
  }

  /**
   * Envoie un email de confirmation au client
   */
  public async sendClientConfirmation(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const emailData: EmailData = req.body;

      // Valider les données
      if (!this.validateEmailData(emailData)) {
        return res.status(400).json({
          success: false,
          message:
            "Données invalides. Veuillez vérifier les champs obligatoires.",
        });
      }

      // Envoyer l'email via le service
      const emailService = EmailService.getInstance();
      const sent = await emailService.sendClientConfirmation(emailData);

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
      console.error(
        "Erreur dans EmailController.sendClientConfirmation:",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Erreur serveur lors de l'envoi de l'email.",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      });
    }
  }

  /**
   * Envoie une notification de nouveau contact à l'admin
   */
  public async sendAdminEmailNewContact(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const emailData: EmailData = req.body;

      // Valider les données
      if (!this.validateEmailData(emailData)) {
        return res.status(400).json({
          success: false,
          message:
            "Données invalides. Veuillez vérifier les champs obligatoires.",
        });
      }

      // Envoyer l'email via le service
      const emailService = EmailService.getInstance();
      const sent = await emailService.sendContactEmail(emailData);

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
      console.error(
        "Erreur dans EmailController.sendAdminEmailNewContact:",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Erreur serveur lors de l'envoi de l'email.",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      });
    }
  }

  /**
   * Envoie une notification de nouveau tiers creer à l'admin
   */
  public async sendAdminEmailNewThird(
    req: RequestWithFile,
    res: Response
  ): Promise<Response> {
    try {
      // Parser les données JSON
      const thirdParty: ThirdPartySubmission = {
        ...req.body,
        bankingDetails: JSON.parse(req.body.bankingDetails),
        responsables: req.body.responsables
          ? JSON.parse(req.body.responsables)
          : undefined,
      };

      const logoFile = req.file;

      const emailService = EmailService.getInstance();
      const sent = await emailService.sendAdminNotificationNewThirdParty(
        thirdParty,
        logoFile
      );

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
      console.error("❌ Erreur dans le contrôleur d'email:", error);
      return res.status(500).json({
        success: false,
        message: "Erreur lors du traitement de la demande",
      });
    }
  }

  /**
   * Valide les données requises pour l'envoi d'email
   */
  private validateEmailData(data: Partial<EmailData>): boolean {
    // Vérifier les champs obligatoires
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
}

// Créer une instance du contrôleur
const emailController = new EmailController();

export const sendAdminNotification = (req: Request, res: Response): void => {
  emailController.sendAdminNotification(req, res);
};

export const sendClientConfirmation = (req: Request, res: Response): void => {
  emailController.sendClientConfirmation(req, res);
};

export const sendAdminNotifictionNewContact = (
  req: Request,
  res: Response
): void => {
  emailController.sendAdminEmailNewContact(req, res);
};

// Middleware pour gérer l'upload de fichier
const handleFileUpload = (
  req: Request,
  res: Response,
  next: () => void
): void => {
  upload.single("logo")(req, res, (err) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: "Erreur lors de l'upload du fichier",
        error: err.message,
      });
      return;
    }
    next();
  });
};

export const sendAdminNotificationNewThirdParty = (
  req: Request,
  res: Response
): void => {
  handleFileUpload(req, res, () => {
    emailController.sendAdminEmailNewThird(req as RequestWithFile, res);
  });
};

export default {
  sendAdminNotification: sendAdminNotification,
  sendAdminNotificationNewContact: sendAdminNotifictionNewContact,
  sendClientConfirmation: sendClientConfirmation,
  sendAdminNotificationNewThirdParty: sendAdminNotificationNewThirdParty,
};
