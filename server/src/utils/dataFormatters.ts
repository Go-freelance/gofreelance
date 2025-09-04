/**
 * Utilitaires pour formater les données avant sauvegarde dans Google Sheets
 */

import { EmailData } from "../types/email";

export interface FormattedAppointmentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  formattedDateTime: string;
  appointmentType: string;
  teamMember: string;
  message: string;
  timestamp: string;
}

export interface FormattedContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}

/**
 * Formate les données d'un rendez-vous pour la sauvegarde
 * @param appointmentData - Données du rendez-vous
 * @returns Données formatées
 */
export function formatAppointmentData(
  appointmentData: EmailData
): FormattedAppointmentData {
  const timestamp = new Date().toLocaleString();
  const formattedDateTime = `${appointmentData.date} à ${appointmentData.time}`;

  return {
    firstName: appointmentData.firstName || "",
    lastName: appointmentData.lastName || "",
    email: appointmentData.email || "",
    phone: appointmentData.phone || "",
    service: appointmentData.service || "",
    formattedDateTime,
    appointmentType: appointmentData.appointmentType || "",
    teamMember: appointmentData.teamMember || "",
    message: appointmentData.message || "",
    timestamp,
  };
}

/**
 * Formate les données d'un contact pour la sauvegarde
 * @param contactData - Données du contact
 * @returns Données formatées
 */
export function formatContactData(
  contactData: EmailData
): FormattedContactData {
  const timestamp = new Date().toLocaleString();

  return {
    firstName: contactData.firstName || "",
    lastName: contactData.lastName || "",
    email: contactData.email || "",
    phone: contactData.phone || "",
    subject: contactData.service || "", // Le service correspond au sujet pour les contacts
    message: contactData.message || "",
    timestamp,
  };
}

/**
 * Convertit les données formatées en tableau pour Google Sheets
 * @param data - Données formatées
 * @returns Tableau de valeurs
 */
export function appointmentDataToArray(
  data: FormattedAppointmentData
): string[] {
  return [
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.service,
    data.formattedDateTime,
    data.appointmentType,
    data.teamMember,
    data.message,
    data.timestamp,
  ];
}

/**
 * Convertit les données de contact formatées en tableau pour Google Sheets
 * @param data - Données formatées
 * @returns Tableau de valeurs
 */
export function contactDataToArray(data: FormattedContactData): string[] {
  return [
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.subject,
    data.message,
    data.timestamp,
  ];
}
