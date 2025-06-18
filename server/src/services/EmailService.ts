import nodemailer, { Transporter } from "nodemailer";
import config from "../config/env";
import { ThirdPartySubmission } from "../types/thirdParty";
import { EmailData } from "../types/email";
import { ThirdPartyTemplate } from "../templates/email/ThirdPartyTemplate";
import { AppointmentTemplate } from "../templates/email/AppointmentTemplate";
import { ContactTemplate } from "../templates/email/ContactTemplate";

class EmailService {
  private transporter: Transporter;
  private static instance: EmailService;

  private constructor() {
    // Créer le transporteur nodemailer avec les options SMTP
    this.transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure,
      auth: {
        user: config.smtp.auth.user,
        pass: config.smtp.auth.pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  /**
   * Retourne l'instance unique du service
   */
  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  /**
   * Envoie un email de notification à l'administrateur
   * @param data Les données du rendez-vous
   * @returns Une promesse qui se résout quand l'email a été envoyé
   */
  public async sendAdminNotification(data: EmailData): Promise<boolean> {
    try {
      // Envoyer l'email
      await this.transporter.sendMail({
        from: `"Go Freelance" <${config.emails.from}>`,
        to: config.emails.admin,
        subject: "Nouvelle demande de rendez-vous",
        html: AppointmentTemplate.generateAdminTemplate(data),
      });

      return true;
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi de l'email admin:", error);
      return false;
    }
  }

  public async sendContactEmail(data: EmailData): Promise<boolean> {
    try {
      await this.transporter.sendMail({
        from: `"Go Freelance" <${config.emails.from}>`,
        to: config.emails.admin,
        subject: "Nouvelle demande de contact",
        html: ContactTemplate.generate(data),
      });

      return true;
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi de l'email contact:", error);
      return false;
    }
  }

  /**
   * Envoie un email de confirmation au client
   * @param data Les données du rendez-vous
   * @returns Une promesse qui se résout quand l'email a été envoyé
   */
  public async sendClientConfirmation(data: EmailData): Promise<boolean> {
    try {
      // Envoyer l'email
      await this.transporter.sendMail({
        from: `"Go Freelance" <${config.emails.from}>`,
        to: data.email,
        subject: "Confirmation de votre rendez-vous",
        html: AppointmentTemplate.generateClientTemplate(data),
      });

      return true;
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi de l'email client:", error);
      return false;
    }
  }

  /**
   * Envoie une notification à l'administrateur lorsqu'un nouveau tiers est créé
   * @param thirdParty Les données du tiers
   * @param logoFile Le fichier logo associé
   * @returns Une promesse qui se résout quand l'email a été envoyé
   */
  public async sendAdminNotificationNewThirdParty(
    thirdParty: ThirdPartySubmission,
    logoFile?: any
  ): Promise<boolean> {
    try {
      const mailOptions: nodemailer.SendMailOptions = {
        from: `"Go Freelance" <${config.emails.from}>`,
        to: config.emails.admin,
        subject: "Nouveau tiers créé",
        html: ThirdPartyTemplate.generate(thirdParty),
      };

      // Ajouter le logo en pièce jointe si présent
      if (logoFile) {
        mailOptions.attachments = [
          {
            filename: logoFile.originalname,
            path: logoFile.path,
          },
        ];
      }

      await this.transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error(
        "❌ Erreur lors de l'envoi de l'email de notification tiers:",
        error
      );
      return false;
    }
  }
}

export default EmailService;
