/**
 * Service pour la gestion des rendez-vous
 */

import { EmailData } from "../types/email";
import { appendAppointment } from "./SheetService";
import { sendAdminNotification } from "./EmailService";

export interface AppointmentResult {
  success: boolean;
  message: string;
}

/**
 * Traite un rendez-vous : sauvegarde + envoi d'email
 * @param appointmentData - Données du rendez-vous
 * @returns Résultat du traitement
 */
export async function processAppointment(
  appointmentData: EmailData
): Promise<AppointmentResult> {
  try {
    // Sauvegarder le rendez-vous dans Google Sheets
    await appendAppointment(appointmentData);

    // Envoyer l'email de notification
    const emailSent = await sendAdminNotification(appointmentData);

    if (!emailSent) {
      return {
        success: false,
        message: "Erreur lors de l'envoi de l'email de notification.",
      };
    }

    return {
      success: true,
      message:
        "Rendez-vous enregistré et email de notification envoyé avec succès.",
    };
  } catch (error) {
    console.error("Erreur lors du traitement du rendez-vous:", error);
    return {
      success: false,
      message: "Erreur serveur lors de l'enregistrement du rendez-vous.",
    };
  }
}
