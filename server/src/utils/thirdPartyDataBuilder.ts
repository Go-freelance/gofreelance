/**
 * Utilitaires pour construire les données des tiers pour Google Sheets
 */

import { ThirdPartySubmission } from "../types/thirdParty";

export interface ThirdPartySheetData {
  range: string;
  values: string[][];
}

export interface BankingDetails {
  bankName?: string;
  accountNumber?: string;
  iban?: string;
  swiftBicCode?: string;
}

/**
 * Construit les données pour la sauvegarde d'un tiers dans Google Sheets
 * @param thirdParty - Données du tiers
 * @param banking - Détails bancaires
 * @param timestamp
 * @returns Données formatées pour Google Sheets
 */
export function buildThirdPartySheetData(
  thirdParty: ThirdPartySubmission,
  banking: BankingDetails,
  timestamp: string
): ThirdPartySheetData | null {
  switch (thirdParty.entityType) {
    case "SOCIETE":
      return buildCompanyData(thirdParty, banking, timestamp);
    case "PARTICULIER":
      return buildIndividualData(thirdParty, banking, timestamp);
    case "ADMINISTRATION":
      return buildAdministrationData(thirdParty, banking, timestamp);
    default:
      return null;
  }
}

/**
 * Construit les données pour une société
 */
function buildCompanyData(
  thirdParty: ThirdPartySubmission,
  banking: BankingDetails,
  timestamp: string
): ThirdPartySheetData {
  return {
    range: "SOCIETE!A1",
    values: [
      [
        thirdParty.denominationSociale || "",
        thirdParty.numeroRCCM || "",
        thirdParty.formeJuridique || "",
        thirdParty.autreFormeJuridique || "",
        thirdParty.numeroIDNAT || "",
        thirdParty.numeroNIF || "",
        thirdParty.siegeSocial || "",
        thirdParty.activitePrincipale || "",
        thirdParty.capitalSocial || "",
        thirdParty.siteWeb || "",
        JSON.stringify(thirdParty.responsables) || "",
        thirdParty.telephone || "",
        thirdParty.email || "",
        banking.bankName || "",
        banking.accountNumber || "",
        banking.iban || "",
        banking.swiftBicCode || "",
        timestamp,
      ],
    ],
  };
}

/**
 * Construit les données pour un particulier
 */
function buildIndividualData(
  thirdParty: ThirdPartySubmission,
  banking: BankingDetails,
  timestamp: string
): ThirdPartySheetData {
  return {
    range: "PARTICULIER!A1",
    values: [
      [
        thirdParty.nom || "",
        thirdParty.prenoms || "",
        thirdParty.dateNaissance || "",
        thirdParty.lieuNaissance || "",
        thirdParty.nationalite || "",
        thirdParty.typeDocument || "",
        thirdParty.numeroDocument || "",
        thirdParty.dateExpiration || "",
        thirdParty.adresse || "",
        thirdParty.telephone || "",
        thirdParty.email || "",
        thirdParty.profession || "",
        thirdParty.employeur || "",
        banking.bankName || "",
        banking.accountNumber || "",
        banking.iban || "",
        banking.swiftBicCode || "",
        timestamp,
      ],
    ],
  };
}

/**
 * Construit les données pour une administration
 */
function buildAdministrationData(
  thirdParty: ThirdPartySubmission,
  banking: BankingDetails,
  timestamp: string
): ThirdPartySheetData {
  return {
    range: "ADMINISTRATION!A1",
    values: [
      [
        thirdParty.nomOfficiel || "",
        thirdParty.categorieAdministrative || "",
        thirdParty.adresseInstitutionnelle || "",
        thirdParty.personneContact || "",
        thirdParty.fonctionContact || "",
        thirdParty.telephoneContact || "",
        thirdParty.emailContact || "",
        thirdParty.numeroIFU || "",
        thirdParty.compteBancaire || "",
        thirdParty.referenceInterne || "",
        thirdParty.acteDeclencheur || "",
        thirdParty.cadreJuridique || "",
        banking.bankName || "",
        banking.accountNumber || "",
        banking.iban || "",
        banking.swiftBicCode || "",
        timestamp,
      ],
    ],
  };
}
