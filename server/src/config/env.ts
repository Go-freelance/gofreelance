import dotenv from "dotenv";
import path from "path";

// Charger les variables d'environnement du fichier .env
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Configuration du serveur et des services
export default {
  // Serveur
  port: parseInt(process.env.PORT || "3001", 10),
  nodeEnv: process.env.NODE_ENV || "development",

  // CORS
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173",

  // SMTP
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASSWORD || "",
    },
  },
 
  // Google Sheets API
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL || undefined,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n") || undefined,
  },

  spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID || "",

  // Emails
  emails: {
    from: process.env.SMTP_FROM,
    admin: process.env.ADMIN_EMAIL || "danmuamba81@gmail.com",
  },
};
