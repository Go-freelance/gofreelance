import nodemailer, { Transporter } from "nodemailer";
import config from "../config/env";

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
  appointmentType?: string;
  teamMember?: string;
}

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
    });
  }

  /**
   * Retourne l'instance unique du service (Singleton)
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
      // Mode développement avec log pour test
      if (config.isDevelopment) {
        console.log("🚀 [EmailService] Simulation d'envoi d'email admin:");
        console.log(`De: ${config.emails.from}`);
        console.log(`À: ${config.emails.admin}`);
        console.log("Sujet: Nouvelle demande de rendez-vous");
        console.log("Data:", data);

        // Créer un compte de test si en mode développement
        if (!config.smtp.auth.user) {
          const testAccount = await nodemailer.createTestAccount();
          console.log("🧪 Compte Ethereal pour tester les emails:");
          console.log(testAccount.web);

          // Reconfigurer le transporteur avec les identifiants de test
          this.transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
              user: testAccount.user,
              pass: testAccount.pass,
            },
          });
        }
      }

      // Envoyer l'email
      const info = await this.transporter.sendMail({
        from: `"Go Freelance" <${config.emails.from}>`,
        to: config.emails.admin,
        subject: "Nouvelle demande de rendez-vous",
        html: this.generateAdminEmailTemplate(data),
      });

      if (config.isDevelopment) {
        console.log(
          "📧 Email de notification admin envoyé: %s",
          info.messageId
        );
        // URL de prévisualisation uniquement disponible avec Ethereal
        if (info.messageId && config.smtp.host === "smtp.ethereal.email") {
          console.log(
            "📬 URL de prévisualisation: %s",
            nodemailer.getTestMessageUrl(info)
          );
        }
      }

      return true;
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi de l'email admin:", error);
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
      // Mode développement avec log pour test
      if (config.isDevelopment) {
        console.log("🚀 [EmailService] Simulation d'envoi d'email client:");
        console.log(`De: ${config.emails.from}`);
        console.log(`À: ${data.email}`);
        console.log("Sujet: Confirmation de votre rendez-vous");
      }

      // Envoyer l'email
      const info = await this.transporter.sendMail({
        from: `"Go Freelance" <${config.emails.from}>`,
        to: data.email,
        subject: "Confirmation de votre rendez-vous",
        html: this.generateClientEmailTemplate(data),
      });

      if (config.isDevelopment) {
        console.log(
          "📧 Email de confirmation client envoyé: %s",
          info.messageId
        );
        // URL de prévisualisation uniquement disponible avec Ethereal
        if (info.messageId && config.smtp.host === "smtp.ethereal.email") {
          console.log(
            "📬 URL de prévisualisation: %s",
            nodemailer.getTestMessageUrl(info)
          );
        }
      }

      return true;
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi de l'email client:", error);
      return false;
    }
  }

  /**
   * Génère le template HTML pour l'email d'administration
   * @param data Les données du rendez-vous
   * @returns Le template HTML
   */
  private generateAdminEmailTemplate(data: EmailData): string {
    const date = new Date(data.date);
    const formattedDate = date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #0055a4; }
          h2 { color: #333; font-size: 18px; margin-top: 20px; }
          ul { padding-left: 20px; }
          li { margin-bottom: 5px; }
          .message { background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px; }
          .footer { margin-top: 30px; font-size: 14px; color: #777; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Nouvelle demande de rendez-vous</h1>
          <p>Un client a pris rendez-vous pour le service <strong>${
            data.service
          }</strong>.</p>
          
          <h2>Détails du rendez-vous:</h2>
          <ul>
            <li><strong>Nom:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Téléphone:</strong> ${data.phone}</li>
            <li><strong>Date:</strong> ${formattedDate}</li>
            <li><strong>Heure:</strong> ${data.time}</li>
            <li><strong>Type de rendez-vous:</strong> ${
              data.appointmentType === "in-person"
                ? "En présentiel"
                : "En ligne (Google Meet)"
            }</li>
            <li><strong>Expert assigné:</strong> ${
              data.teamMember || "Non spécifié"
            }</li>
          </ul>
          
          ${
            data.message
              ? `<div class="message"><h2>Message:</h2><p>${data.message}</p></div>`
              : ""
          }
          
          <p>Veuillez confirmer ce rendez-vous dès que possible.</p>
          
          <div class="footer">
            <p>Cet email a été envoyé automatiquement, merci de ne pas y répondre.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  /**
   * Génère le template HTML pour l'email client
   * @param data Les données du rendez-vous
   * @returns Le template HTML
   */
  private generateClientEmailTemplate(data: EmailData): string {
    const date = new Date(data.date);
    const formattedDate = date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const isOnline = data.appointmentType === "online";
    const meetLink = isOnline ? "https://meet.google.com/xyz-abcd-123" : null;

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #0055a4; }
          h2 { color: #333; font-size: 18px; margin-top: 20px; }
          .details { background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0; }
          .footer { margin-top: 30px; font-size: 14px; color: #777; border-top: 1px solid #eee; padding-top: 20px; }
          .btn { display: inline-block; background-color: #0055a4; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Confirmation de votre rendez-vous</h1>
          <p>Bonjour ${data.name},</p>
          <p>Nous vous confirmons votre rendez-vous pour le service <strong>${
            data.service
          }</strong>.</p>
          
          <div class="details">
            <h2>Récapitulatif :</h2>
            <p><strong>Date :</strong> ${formattedDate}</p>
            <p><strong>Heure :</strong> ${data.time}</p>
            <p><strong>Type de rendez-vous :</strong> ${
              isOnline ? "En ligne (Google Meet)" : "En présentiel"
            }</p>
            ${
              data.teamMember
                ? `<p><strong>Expert :</strong> ${data.teamMember}</p>`
                : ""
            }
            
            ${
              isOnline
                ? `
              <p><strong>Lien de réunion :</strong></p>
              <a href="${meetLink}" class="btn">Rejoindre la réunion</a>
              <p><em>Ce lien sera actif à l'heure de votre rendez-vous.</em></p>
            `
                : `
              <p><strong>Adresse :</strong> Kinshasa/Gombe, République Démocratique du Congo</p>
              <p><em>Notre équipe vous accueillera à la réception.</em></p>
            `
            }
          </div>
          
          <p>Si vous avez besoin de modifier ou d'annuler votre rendez-vous, merci de nous contacter directement par téléphone au +243 000 000 000 ou par email à contact@gofreelance.com.</p>
          
          <p>Nous sommes impatients de vous rencontrer !</p>
          <p>L'équipe Go Freelance</p>
          
          <div class="footer">
            <p>Cet email a été envoyé automatiquement, merci de ne pas y répondre.</p>
            <p>© ${new Date().getFullYear()} Go Freelance. Tous droits réservés.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

export default EmailService;
