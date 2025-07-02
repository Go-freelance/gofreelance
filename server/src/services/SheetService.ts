import config from "../config/env";
import { google } from "googleapis";
import { ThirdPartySubmission } from "../types/thirdParty";

type sheetsClient = ReturnType<typeof google.sheets>;
let client: sheetsClient | null = null;
const spreadsheetId = config.spreadsheetId;

export function initSheetService() {
  const auth = new google.auth.GoogleAuth({
    credentials: config.credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  client = google.sheets({ version: "v4", auth });
}

export async function appendThirdParty(ThirdParty: ThirdPartySubmission) {
  if (!client) {
    throw new Error("Google Sheets client is not initialized");
  }

  const banking = ThirdParty.bankingDetails?.[0] || {};
  const timestamp = new Date().toLocaleString();

  const { range, values } = buildSheetData(ThirdParty, banking, timestamp);

  if (range && values.length) {
    await client.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });
  }
}

//Helper function to build the data structure for the Google Sheet
function buildSheetData(
  thirdParty: ThirdPartySubmission,
  banking: {
    bankName?: string;
    accountNumber?: string;
    iban?: string;
    swiftBicCode?: string;
  },
  timestamp: string
) {
  switch (thirdParty.entityType) {
    case "SOCIETE":
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
    case "PARTICULIER":
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
    case "ADMINISTRATION":
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
}
