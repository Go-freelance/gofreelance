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
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASSWORD || "",
    },
  },

  // Emails
  emails: {
    from: process.env.FROM_EMAIL || "noreply@gofreelance.com",
    admin: process.env.ADMIN_EMAIL || "admin@gofreelance.com",
  },

  // Autres options
  isDevelopment: (process.env.NODE_ENV || "development") === "development",
};
