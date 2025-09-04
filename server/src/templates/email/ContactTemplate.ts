import { EmailData } from "../../types/email";
import { emailStyles } from "./styles";

export class ContactTemplate {
  public static generate(data: EmailData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>${emailStyles}</style>
      </head>
      <body>
        <div class="container">
          <h1>Nouvelle demande de contact</h1>
          <p>Un client a contacté pour le service <strong>${
            data.service
          }</strong>.</p>

          <div class="section">
            <h2>Détails du contact:</h2>
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
                <td style="padding: 8px;"><strong>Message:</strong></td>
                <td style="padding: 8px;">${data.message}</td>
              </tr>
            </table>
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
