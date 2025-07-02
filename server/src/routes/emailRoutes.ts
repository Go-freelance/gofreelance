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
  EmailController.default.sendAdminNotification(req, res);
});

/**
 * @route POST /api/emails/admin-notification-contact
 * @desc Envoyer un email de notification à l'administrateur pour un nouveau contact
 * @access Public
 */

router.post("/admin-notification-contact", (req: Request, res: Response) => {
  EmailController.default.sendAdminNotificationNewContact(req, res);
});

/**
 * @route POST /api/emails/client-confirmation
 * @desc Envoyer un email de confirmation au client
 * @access Public
 */
router.post("/client-confirmation", (req: Request, res: Response) => {
  EmailController.default.sendClientConfirmation(req, res);
});

/**
 * @route POST /api/emails/admin-notification-new-third-party
 * @desc Envoyer une notification à l'administrateur pour un nouveau tiers
 * @access Public
 */

router.post(
  "/admin-notification-third-party",
  (req: Request, res: Response) => {
    EmailController.default.sendAdminNotificationNewThirdParty(req, res);
  }
);

export default router;
