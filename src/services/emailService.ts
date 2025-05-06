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
    // this.isDevelopment = import.meta.env.MODE === "development";
    // En production, utiliser l'URL de l'API réelle
    this.apiUrl = import.meta.env.VITE_API_URL;
  }

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
      // Simulation d'envoi d'email en mode développement
      // if (this.isDevelopment && import.meta.env.VITE_EMAIL_LOGGER === "true") {
      //   console.log(
      //     "Simulation - Sending admin notification email to: admin@gofreelance.com"
      //   );
      //   console.log("From: contact@gofreelance.com");
      //   console.log("Subject: Nouvelle demande de rendez-vous");
      //   console.log("Data:", data);
      //   await new Promise((resolve) => setTimeout(resolve, 800));
      //   return true;
      // }

      // En production, appeler l'API pour envoyer l'email
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
      // Simulation d'envoi d'email en mode développement
      // if (this.isDevelopment && import.meta.env.VITE_EMAIL_LOGGER === "true") {
      //   console.log("Simulation - Sending confirmation email to:", data.email);
      //   console.log("From: contact@gofreelance.com");
      //   console.log("Subject: Confirmation de votre rendez-vous");
      //   await new Promise((resolve) => setTimeout(resolve, 800));
      //   return true;
      // }

      // En production, appeler l'API pour envoyer l'email
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
