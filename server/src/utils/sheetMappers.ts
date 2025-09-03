/**
 * Utilitaires pour mapper les données vers les feuilles Google Sheets
 */

export interface SheetMapping {
  [key: string]: string;
}

/**
 * Mapping des services vers les noms de feuilles pour les rendez-vous
 */
export const APPOINTMENT_SERVICE_MAPPING: SheetMapping = {
  Automatisation: "AUTOMATISATION",
  "Campagne Cross Canal": "CAMPAGNE_CROSS_CANAL",
  "Développement WordPress Elementor": "WORDPRESS_ELEMENTOR",
  "Développement Web et Mobile": "DEVELOPPEMENT_WEB_MOBILE",
  "Transformation Digitale": "TRANSFORMATION_DIGITALE",
  "Intégration IA": "INTEGRATION_IA",
  "Campagne Publicitaire": "CAMPAGNE_PUBLICITAIRE",
};

/**
 * Mapping des types d'entités vers les noms de feuilles pour les tiers
 */
export const THIRD_PARTY_ENTITY_MAPPING: SheetMapping = {
  SOCIETE: "SOCIETE",
  PARTICULIER: "PARTICULIER",
  ADMINISTRATION: "ADMINISTRATION",
};

/**
 * Obtient le nom de la feuille pour un service de rendez-vous
 * @param serviceName - Nom du service
 * @returns Nom de la feuille correspondante
 */
export function getAppointmentSheetName(serviceName: string): string {
  return APPOINTMENT_SERVICE_MAPPING[serviceName] || "RENDEZ_VOUS_GENERAL";
}

/**
 * Obtient le nom de la feuille pour un type d'entité de tiers
 * @param entityType - Type d'entité
 * @returns Nom de la feuille correspondante
 */
export function getThirdPartySheetName(entityType: string): string {
  return THIRD_PARTY_ENTITY_MAPPING[entityType] || "TIERS_GENERAL";
}
