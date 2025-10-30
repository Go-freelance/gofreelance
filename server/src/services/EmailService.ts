import nodemailer, { Transporter } from "nodemailer";
import config from "../config/env";
import { ThirdPartySubmission } from "../types/thirdParty";
import { EmailData } from "../types/email";
import { ThirdPartyTemplate } from "../templates/email/ThirdPartyTemplate";
import { AppointmentTemplate } from "../templates/email/AppointmentTemplate";
import { ContactTemplate } from "../templates/email/ContactTemplate";

let transporter: Transporter | null = null;

export function initEmailService() {
  transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: {
      user: config.smtp.auth.user,
      pass: config.smtp.auth.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export async function sendAdminNotification(data: EmailData): Promise<boolean> {
  if (!transporter) throw new Error("Email service not initialized");
  try {
    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Go Freelance" <${config.emails.from}>`,
      to: config.emails.admin,
      cc: config.emails.additionalRecipients,
      subject: "Nouvelle demande de rendez-vous",
      html: AppointmentTemplate.generateAdminTemplate(data),
    };
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email admin:", error);
    return false;
  }
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  if (!transporter) throw new Error("Email service not initialized");
  try {
    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Go Freelance" <${config.emails.from}>`,
      to: config.emails.admin,
      cc: config.emails.additionalRecipients,
      subject: "Nouvelle demande de contact",
      html: ContactTemplate.generate(data),
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email contact:", error);
    return false;
  }
}

export async function sendClientConfirmation(
  data: EmailData
): Promise<boolean> {
  if (!transporter) throw new Error("Email service not initialized");
  try {
    await transporter.sendMail({
      from: `"Go Freelance" <${config.emails.from}>`,
      to: data.email,
      subject: "Confirmation de votre rendez-vous",
      html: AppointmentTemplate.generateClientTemplate(data),
    });
    return true;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email client:", error);
    return false;
  }
}

export async function sendAdminNotificationNewThirdParty(
  thirdParty: ThirdPartySubmission,
  logoFile?: Express.Multer.File
): Promise<boolean> {
  if (!transporter) throw new Error("Email service not initialized");
  try {
    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Go Freelance" <${config.emails.from}>`,
      to: config.emails.admin,
      cc: config.emails.additionalRecipients,
      subject: "Nouveau tiers créé",
      html: ThirdPartyTemplate.generate(thirdParty),
    };

    if (logoFile) {
      mailOptions.attachments = [
        {
          filename: logoFile.originalname,
          path: logoFile.path,
        },
      ];
    }
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error(
      "Erreur lors de l'envoi de l'email de notification tiers:",
      error
    );
    return false;
  }
}
