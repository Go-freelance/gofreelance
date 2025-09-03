/**
 * Utilitaires pour les réponses API standardisées
 */

import { Response } from "express";

export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Envoie une réponse de succès
 * @param res - Objet Response d'Express
 * @param message - Message de succès
 * @param statusCode - Code de statut HTTP (défaut: 200)
 */
export function sendSuccessResponse(
  res: Response,
  message: string,
  statusCode: number = 200
): void {
  res.status(statusCode).json({
    success: true,
    message,
  });
}

/**
 * Envoie une réponse d'erreur
 * @param res - Objet Response d'Express
 * @param message - Message d'erreur
 * @param statusCode - Code de statut HTTP (défaut: 500)
 * @param error - Détails de l'erreur (optionnel)
 */
export function sendErrorResponse(
  res: Response,
  message: string,
  statusCode: number = 500,
  error?: string
): void {
  const response: ApiResponse = {
    success: false,
    message,
  };

  if (error) {
    response.error = error;
  }

  res.status(statusCode).json(response);
}

/**
 * Envoie une réponse de validation échouée
 * @param res - Objet Response d'Express
 * @param message - Message de validation
 */
export function sendValidationErrorResponse(
  res: Response,
  message: string = "Données invalides. Veuillez vérifier les champs obligatoires."
): void {
  sendErrorResponse(res, message, 400);
}

/**
 * Envoie une réponse d'erreur serveur
 * @param res - Objet Response d'Express
 * @param message - Message d'erreur
 * @param error - Détails de l'erreur
 */
export function sendServerErrorResponse(
  res: Response,
  message: string,
  error?: unknown
): void {
  const errorMessage =
    error instanceof Error
      ? error.message
      : (error as string) || "Erreur inconnue";
  sendErrorResponse(res, message, 500, errorMessage);
}
