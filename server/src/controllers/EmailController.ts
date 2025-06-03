import { Request, Response } from "express";
import EmailService, { EmailData } from "../services/EmailService";
import { ThirdPartySubmission } from "../types/thirdParty";

/**
 * Contrôleur pour gérer les fonctionnalités d'envoi d'emails
 */
class EmailController {
  /**
   * Envoie une notification de nouveau rendez-vous à l'admin
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

export const sendAdminNotificationNewThirdParty = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const thirdParty: ThirdPartySubmission = req.body;

    const emailService = EmailService.getInstance();
    const success = await emailService.sendAdminNotificationNewThirdParty(
      thirdParty
    );

    if (success) {
      res.status(200).json({
        success: true,
        message: "Email de notification envoyé avec succès",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Erreur lors de l'envoi de l'email de notification",
      });
    }
  } catch (error) {
    console.error("❌ Erreur dans le contrôleur d'email:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors du traitement de la demande",
    });
  }
};

export default {
  sendAdminNotification: sendAdminNotification,
  sendAdminNotificationNewContact: sendAdminNotifictionNewContact,
  sendClientConfirmation: sendClientConfirmation,
  sendAdminNotificationNewThirdParty: sendAdminNotificationNewThirdParty,
};
