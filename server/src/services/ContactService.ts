/**
 * Service pour la gestion des contacts
 */

import { EmailData } from "../types/email";
import { appendContact } from "./SheetService";
import { sendContactEmail } from "./EmailService";

export interface ContactResult {
  success: boolean;
  message: string;
}

/**
 * Traite un contact : sauvegarde + envoi d'email
 * @param contactData - Données du contact
 * @returns Résultat du traitement
 */
export async function processContact(
  contactData: EmailData
): Promise<ContactResult> {
  try {
    // Sauvegarder le contact dans Google Sheets
    await appendContact(contactData);

    // Envoyer l'email de notification
    const emailSent = await sendContactEmail(contactData);

    if (!emailSent) {
      return {
        success: false,
        message: "Erreur lors de l'envoi de l'email de contact.",
      };
    }

    return {
      success: true,
      message: "Contact enregistré et email envoyé avec succès.",
    };
  } catch (error) {
    console.error("Erreur lors du traitement du contact:", error);
    return {
      success: false,
      message: "Erreur serveur lors de l'enregistrement du contact.",
    };
  }
}
