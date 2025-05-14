import { Router } from "express";
import { Request, Response } from "express";
import * as EmailController from "../controllers/EmailController";

const router = Router();

/**
 * @route POST /api/emails/admin-notification
 * @desc Envoyer un email de notification à l'administrateur
 * @access Public
 */
router.post("/admin-notification", (req: Request, res: Response) => {
  EmailController.sendAdminNotification(req, res);
});

/**
 * @route POST /api/emails/admin-notification-contact
 * @desc Envoyer un email de notification à l'administrateur pour un nouveau contact
 * @access Public
 */

router.post("/admin-notification-contact", (req: Request, res: Response) => {
  EmailController.sendAdminNotifictionNewContact(req, res);
});

/**
 * @route POST /api/emails/client-confirmation
 * @desc Envoyer un email de confirmation au client
 * @access Public
 */
router.post("/client-confirmation", (req: Request, res: Response) => {
  EmailController.sendClientConfirmation(req, res);
});

export default router;
