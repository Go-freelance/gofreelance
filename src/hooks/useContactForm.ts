import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ContactFormData,
  validateContactForm,
  hasValidationErrors,
  sanitizeContactFormData,
} from "../schemas/contactSchema";
import { EmailService, type EmailData } from "../services/emailService";

interface UseContactFormReturn {
  form: ReturnType<typeof useForm<ContactFormData>>;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export const useContactForm = (): UseContactFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    mode: "onBlur", // Validation en temps réel lors de la perte de focus
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    // Nettoyer et valider les données
    const cleanData = sanitizeContactFormData(data);
    const validationErrors = validateContactForm(cleanData);

    // Si il y a des erreurs de validation, les appliquer au formulaire
    if (hasValidationErrors(validationErrors)) {
      // Appliquer les erreurs au formulaire
      Object.entries(validationErrors).forEach(([field, message]) => {
        form.setError(field as keyof ContactFormData, {
          type: "manual",
          message: message,
        });
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const emailService = EmailService.getInstance();

      // Transformer les données pour correspondre à l'interface EmailData
      const emailData: EmailData = {
        firstName: cleanData.firstName,
        lastName: cleanData.lastName,
        email: cleanData.email,
        phone: cleanData.phone || "",
        date: new Date().toISOString(),
        time: new Date().toLocaleTimeString(),
        service: cleanData.subject,
        message: cleanData.message,
      };

      const success = await emailService.sendAdminNotificationNewContact(
        emailData
      );

      if (success) {
        setIsSuccess(true);
        form.reset();

        // Revenir à l'état initial après 5 secondes
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        setError(
          "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer."
        );
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi du formulaire de contact:", err);
      setError(
        "Une erreur inattendue s'est produite. Veuillez réessayer plus tard."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    isSuccess,
    error,
    onSubmit,
  };
};

// Export du type pour la compatibilité
export type { ContactFormData };
