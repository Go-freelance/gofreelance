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
   * @returns Une promesse qui se résout quand l'email a été envoyé
   */
  public async sendAdminNotificationNewThirdParty(
    thirdParty: ThirdParty
  ): Promise<boolean> {
    try {
      const response = await fetch(
        `${this.apiUrl}/emails/admin-notification-third-party`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(thirdParty),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error(
        "Error sending admin notification for new third party:",
        error
      );
      return false;
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
