/**
 * Service pour la gestion des confirmations client
 */

import { EmailData } from "../types/email";
import { sendClientConfirmation } from "./EmailService";

export interface ClientConfirmationResult {
  success: boolean;
  message: string;
}

/**
 * Traite une confirmation client : envoi d'email
 * @param emailData - Données du rendez-vous
 * @returns Résultat du traitement
 */
export async function processClientConfirmation(
  emailData: EmailData
): Promise<ClientConfirmationResult> {
  try {
    // Envoyer l'email de confirmation
    const emailSent = await sendClientConfirmation(emailData);

    if (!emailSent) {
      return {
        success: false,
        message: "Erreur lors de l'envoi de l'email de confirmation.",
      };
    }

    return {
      success: true,
      message: "Email de confirmation envoyé avec succès.",
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi de la confirmation client:", error);
    return {
      success: false,
      message: "Erreur serveur lors de l'envoi de l'email.",
    };
  }
}
