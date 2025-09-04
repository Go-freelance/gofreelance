/**
 * Utilitaires de validation pour les contrôleurs
 */

import { EmailData } from "../types/email";

/**
 * Valide les données d'email requises
 * @param data - Données à valider
 * @returns true si valide, false sinon
 */
export function validateEmailData(data: Partial<EmailData>): boolean {
  return !!(
    data &&
    data.firstName &&
    data.lastName &&
    data.email &&
    data.phone &&
    data.date &&
    data.time &&
    data.service
  );
}

/**
 * Valide les données de contact
 * @param data - Données à valider
 * @returns true si valide, false sinon
 */
export function validateContactData(data: Partial<EmailData>): boolean {
  return !!(
    data &&
    data.firstName &&
    data.lastName &&
    data.email &&
    data.phone &&
    data.service
  );
}
