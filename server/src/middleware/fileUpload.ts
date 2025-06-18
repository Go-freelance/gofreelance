import { upload } from "../config/multer";
import { Request, Response, NextFunction } from "express";

export const handleFileUpload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  upload.single("logo")(req, res, (err) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: "Erreur lors de l'upload du fichier",
        error: err.message,
      });
      return;
    }
    next();
  });
};
