import config from "../config/env";
import { google } from "googleapis";
import { ThirdPartySubmission } from "../types/thirdParty";
import { EmailData } from "../types/email";
import { getAppointmentSheetName } from "../utils/sheetMappers";
import {
  formatAppointmentData,
  formatContactData,
  appointmentDataToArray,
  contactDataToArray,
} from "../utils/dataFormatters";
import { buildThirdPartySheetData } from "../utils/thirdPartyDataBuilder";

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

export async function appendThirdParty(thirdParty: ThirdPartySubmission) {
  if (!client) {
    throw new Error("Google Sheets client is not initialized");
  }

  const banking = thirdParty.bankingDetails?.[0] || {};
  const timestamp = new Date().toLocaleString();

  const sheetData = buildThirdPartySheetData(thirdParty, banking, timestamp);

  if (sheetData && sheetData.values.length) {
    await client.spreadsheets.values.append({
      spreadsheetId,
      range: sheetData.range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: sheetData.values },
    });
  }
}

export async function appendAppointment(appointmentData: EmailData) {
  if (!client) {
    throw new Error("Google Sheets client is not initialized");
  }

  const sheetName = getAppointmentSheetName(appointmentData.service || "");
  const formattedData = formatAppointmentData(appointmentData);
  const values = [appointmentDataToArray(formattedData)];

  try {
    const result = await client.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return {
      success: true,
      message: `Rendez-vous sauvegardé avec succès dans ${sheetName}`,
      data: result.data,
      sheetName: sheetName,
    };
  } catch (error) {
    console.error("Erreur lors de la sauvegarde dans Google Sheets:", error);
    throw error;
  }
}

export async function appendContact(contactData: EmailData) {
  if (!client) {
    throw new Error("Google Sheets client is not initialized");
  }

  const formattedData = formatContactData(contactData);
  const values = [contactDataToArray(formattedData)];

  try {
    const result = await client.spreadsheets.values.append({
      spreadsheetId,
      range: "CONTACTS!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return {
      success: true,
      message: "Contact sauvegardé avec succès",
      data: result.data,
    };
  } catch (error) {
    console.error(
      "Erreur lors de la sauvegarde du contact dans Google Sheets:",
      error
    );
    throw error;
  }
}
