import { EmailData } from "../../types/email";
import { emailStyles } from "./styles";

export class AppointmentTemplate {
  public static generateAdminTemplate(data: EmailData): string {
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
        <style>${emailStyles}</style>
      </head>
      <body>
        <div class="container">
          <h1>Nouvelle demande de rendez-vous</h1>
          <p>Un client a pris rendez-vous pour le service <strong>${
            data.service
          }</strong>.</p>
          
          <div class="section">
            <h2>Détails du rendez-vous:</h2>
            <table>
              <tr>
                <td style="padding: 8px; width: 150px;"><strong>Nom:</strong></td>
                <td style="padding: 8px;">${data.firstName} ${
      data.lastName
    }</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Email:</strong></td>
                <td style="padding: 8px;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Téléphone:</strong></td>
                <td style="padding: 8px;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Date:</strong></td>
                <td style="padding: 8px;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Heure:</strong></td>
                <td style="padding: 8px;">${data.time}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Type de rendez-vous:</strong></td>
                <td style="padding: 8px;">${
                  data.appointmentType === "in-person"
                    ? "En présentiel"
                    : "En ligne (Google Meet)"
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Agent assigné:</strong></td>
                <td style="padding: 8px;">${
                  data.teamMember || "Non spécifié"
                }</td>
              </tr>
            </table>
          </div>
          
          ${
            data.message
              ? `
            <div class="section">
              <h2>Message:</h2>
              <p>${data.message}</p>
            </div>
          `
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

  public static generateClientTemplate(data: EmailData): string {
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
          ${emailStyles}
          .btn { display: inline-block; background-color: #0055a4; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Confirmation de votre rendez-vous</h1>
          <p>Bonjour ${data.firstName} ${data.lastName},</p>
          <p>Nous vous confirmons votre rendez-vous pour le service <strong>${
            data.service
          }</strong>.</p>
          
          <div class="section">
            <h2>Récapitulatif :</h2>
            <table>
              <tr>
                <td style="padding: 8px; width: 150px;"><strong>Date :</strong></td>
                <td style="padding: 8px;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Heure :</strong></td>
                <td style="padding: 8px;">${data.time}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Type de rendez-vous :</strong></td>
                <td style="padding: 8px;">${
                  isOnline ? "En ligne (Google Meet)" : "En présentiel"
                }</td>
              </tr>
              ${
                data.teamMember
                  ? `
              <tr>
                <td style="padding: 8px;"><strong>Expert :</strong></td>
                <td style="padding: 8px;">${data.teamMember}</td>
              </tr>
              `
                  : ""
              }
            </table>
            
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
