import { ThirdPartySubmission } from "../types/thirdParty";

export interface EmailResponse {
  success: boolean;
  message: string;
}
export interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
  appointmentType?: string;
  teamMember?: string;
}

export class EmailService {
  private static instance: EmailService;
  private readonly apiUrl: string;
  // private readonly isDevelopment: boolean;

  private constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL;
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  /**
   * Envoie un email de notification à l'administrateur pour un nouveau tiers
   * @param thirdParty Les données du tiers
   * @returns Une promesse qui se résout avec la réponse de l'API
   */
  public async sendAdminNotificationNewThirdParty(
    thirdParty: ThirdPartySubmission | FormData
  ): Promise<EmailResponse> {
    try {
      const isFormData = thirdParty instanceof FormData;
      const response = await fetch(
        `${this.apiUrl}/emails/admin-notification-third-party`,
        {
          method: "POST",
          headers: isFormData
            ? {}
            : {
                "Content-Type": "application/json",
              },
          body: isFormData ? thirdParty : JSON.stringify(thirdParty),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "Erreur lors de l'envoi de l'email",
        };
      }

      return {
        success: true,
        message: data.message || "Email envoyé avec succès",
      };
    } catch (error) {
      console.error(
        "Error sending admin notification for new third party:",
        error
      );
      return {
        success: false,
        message: "Erreur lors de l'envoi de l'email",
      };
    }
  }

  /**
   * Envoie un email de notification à l'administrateur pour un nouveau contact
   * @param data Les données du contact
   * @returns Une promesse qui se résout quand l'email a été envoyé
   */
  public async sendAdminNotificationNewContact(
    data: EmailData
  ): Promise<boolean> {
    try {
      const response = await fetch(
        `${this.apiUrl}/emails/admin-notification-contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error("Error sending admin notification:", error);
      return false;
    }
  }

  /**
   * Envoie un email de notification à l'administrateur
   * @param data Les données du rendez-vous
   * @returns Une promesse qui se résout quand l'email a été envoyé
   */
  public async sendAdminNotification(data: EmailData): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiUrl}/emails/admin-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error("Error sending admin notification:", error);
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
      const response = await fetch(
        `${this.apiUrl}/emails/client-confirmation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error("Error sending client confirmation:", error);
      return false;
    }
  }
}
