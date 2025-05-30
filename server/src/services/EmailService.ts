import nodemailer, { Transporter } from "nodemailer";
import config from "../config/env";
import { ThirdParty } from "../types/thirdParty";

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
        html: this.generateAdminEmailTemplate(data),
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
        html: this.generateContactEmailTemplate(data),
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
        html: this.generateClientEmailTemplate(data),
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
   * @returns Une promesse qui se résout quand l'email a été envoyé
   */
  public async sendAdminNotificationNewThirdParty(
    thirdParty: ThirdParty
  ): Promise<boolean> {
    try {
      await this.transporter.sendMail({
        from: `"Go Freelance" <${config.emails.from}>`,
        to: config.emails.admin,
        subject: "Nouveau tiers créé",
        html: this.generateThirdPartyEmailTemplate(thirdParty),
      });

      return true;
    } catch (error) {
      console.error(
        "❌ Erreur lors de l'envoi de l'email de notification tiers:",
        error
      );
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
            <li><strong>Agent assigné:</strong> ${
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

  private generateContactEmailTemplate(data: EmailData): string {
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
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Nouvelle demande de contact</h1>
          <p>Un client a contacté pour le service <strong>${
            data.service
          }</strong>.</p>

          <div class="details">
            <h2>Détails du contact:</h2>
            <ul>
              <li><strong>Nom:</strong> ${data.name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Téléphone:</strong> ${data.phone}</li>
              <li><strong>Message:</strong> ${data.message}</li>
            </ul>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Go Freelance. Tous droits réservés.</p>
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

  /**
   * Génère le template HTML pour l'email de notification tiers
   * @param thirdParty Les données du tiers
   * @returns Le template HTML
   */
  private generateThirdPartyEmailTemplate(thirdParty: ThirdParty): string {
    const getEntitySpecificInfo = () => {
      switch (thirdParty.entityType) {
        case "Company":
          return `
            <li><strong>Nom de l'entreprise:</strong> ${
              thirdParty.companyName
            }</li>
            <li><strong>Date d'établissement:</strong> ${
              thirdParty.establishmentDate || "Non spécifié"
            }</li>
            <li><strong>Site web:</strong> ${
              thirdParty.website || "Non spécifié"
            }</li>
            <li><strong>Industrie:</strong> ${
              thirdParty.industry || "Non spécifié"
            }</li>
            <li><strong>Personne de contact:</strong> ${
              thirdParty.contactPerson || "Non spécifié"
            }</li>
            <li><strong>Titre du poste:</strong> ${
              thirdParty.jobTitle || "Non spécifié"
            }</li>
          `;
        case "Individual":
          return `
            <li><strong>Prénom:</strong> ${thirdParty.firstName}</li>
            <li><strong>Nom:</strong> ${thirdParty.lastName}</li>
            <li><strong>Date de naissance:</strong> ${
              thirdParty.dateOfBirth || "Non spécifié"
            }</li>
            <li><strong>Profession:</strong> ${
              thirdParty.profession || "Non spécifié"
            }</li>
            <li><strong>Téléphone alternatif:</strong> ${
              thirdParty.alternatePhone || "Non spécifié"
            }</li>
          `;
        case "Government":
          return `
            <li><strong>Nom de l'institution:</strong> ${
              thirdParty.institutionName
            }</li>
            <li><strong>Type d'institution:</strong> ${
              thirdParty.institutionType || "Non spécifié"
            }</li>
            <li><strong>Date de création:</strong> ${
              thirdParty.foundingDate || "Non spécifié"
            }</li>
            <li><strong>Niveau de juridiction:</strong> ${
              thirdParty.jurisdictionLevel || "Non spécifié"
            }</li>
            <li><strong>Personne de contact:</strong> ${
              thirdParty.contactPerson || "Non spécifié"
            }</li>
            <li><strong>Titre du poste:</strong> ${
              thirdParty.jobTitle || "Non spécifié"
            }</li>
          `;
        case "LargeAccount":
          return `
            <li><strong>Nom de l'entreprise:</strong> ${
              thirdParty.corporateName
            }</li>
            <li><strong>Groupe d'entreprises:</strong> ${
              thirdParty.corporateGroup || "Non spécifié"
            }</li>
            <li><strong>Année d'établissement:</strong> ${
              thirdParty.yearEstablished || "Non spécifié"
            }</li>
            <li><strong>Nombre d'employés:</strong> ${
              thirdParty.numberOfEmployees || "Non spécifié"
            }</li>
            <li><strong>Industrie:</strong> ${
              thirdParty.industry || "Non spécifié"
            }</li>
            <li><strong>Contact principal:</strong> ${
              thirdParty.primaryContactPerson || "Non spécifié"
            }</li>
            <li><strong>Titre du poste:</strong> ${
              thirdParty.jobTitle || "Non spécifié"
            }</li>
            <li><strong>Contact alternatif:</strong> ${
              thirdParty.alternateContact || "Non spécifié"
            }</li>
          `;
      }
    };

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
          .section { background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0; }
          ul { padding-left: 20px; }
          li { margin-bottom: 5px; }
          .footer { margin-top: 30px; font-size: 14px; color: #777; border-top: 1px solid #eee; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Nouveau tiers créé</h1>
          <p>Un nouveau tiers de type <strong>${
            thirdParty.entityType
          }</strong> a été créé.</p>

          <div class="section">
            <h2>Informations générales:</h2>
            <ul>
              ${getEntitySpecificInfo()}
              <li><strong>Adresse:</strong> ${thirdParty.address}</li>
              <li><strong>Ville:</strong> ${thirdParty.city}</li>
              <li><strong>État/Province:</strong> ${
                thirdParty.stateProvince
              }</li>
              <li><strong>Code postal:</strong> ${thirdParty.postalCode}</li>
              <li><strong>Pays:</strong> ${thirdParty.country}</li>
              <li><strong>Email:</strong> ${thirdParty.email}</li>
              <li><strong>Téléphone:</strong> ${thirdParty.phone}</li>
            </ul>
          </div>

          <div class="section">
            <h2>Informations fiscales:</h2>
            <ul>
              <li><strong>Type d'identifiant:</strong> ${
                thirdParty.identificationFiscal.idType || "Non spécifié"
              }</li>
              <li><strong>Numéro d'identifiant:</strong> ${
                thirdParty.identificationFiscal.idNumber
              }</li>
              <li><strong>Autorité émettrice:</strong> ${
                thirdParty.identificationFiscal.issuingAuthority ||
                "Non spécifié"
              }</li>
              <li><strong>Nationalité:</strong> ${
                thirdParty.identificationFiscal.nationality || "Non spécifié"
              }</li>
              <li><strong>Numéro de taxe:</strong> ${
                thirdParty.identificationFiscal.taxIdNumber
              }</li>
              <li><strong>Pays de résidence fiscale:</strong> ${
                thirdParty.identificationFiscal.taxResidenceCountry ||
                "Non spécifié"
              }</li>
              <li><strong>Numéro de TVA:</strong> ${
                thirdParty.identificationFiscal.vatRegistration ||
                "Non spécifié"
              }</li>
              <li><strong>Activité commerciale:</strong> ${
                thirdParty.identificationFiscal.businessActivity ||
                "Non spécifié"
              }</li>
            </ul>
          </div>

          <div class="section">
            <h2>Informations bancaires:</h2>
            ${thirdParty.bankingDetails
              .map(
                (bank, index) => `
              <h3>Compte ${index + 1}:</h3>
              <ul>
                <li><strong>Nom de la banque:</strong> ${bank.bankName}</li>
                <li><strong>Nom de la succursale:</strong> ${
                  bank.branchName || "Non spécifié"
                }</li>
                <li><strong>Titulaire du compte:</strong> ${
                  bank.accountHolderName
                }</li>
                <li><strong>Devise:</strong> ${bank.accountCurrency}</li>
                <li><strong>Numéro de compte:</strong> ${
                  bank.accountNumber
                }</li>
                <li><strong>Code SWIFT/BIC:</strong> ${
                  bank.swiftBicCode || "Non spécifié"
                }</li>
                <li><strong>IBAN:</strong> ${bank.iban || "Non spécifié"}</li>
              </ul>
            `
              )
              .join("")}
          </div>

          <div class="footer">
            <p>© ${new Date().getFullYear()} Go Freelance. Tous droits réservés.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

export default EmailService;
