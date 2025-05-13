import { useState } from "react";
import { EmailService, type EmailData } from "../services/emailService";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const emailService = EmailService.getInstance();

      const emailData: EmailData = {
        ...formData,
        date: new Date().toISOString(),
        time: new Date().toLocaleTimeString(),
        service: formData.subject,
      };

      const adminEmailSent = await emailService.sendAdminNotification(
        emailData
      );


      if (adminEmailSent ) {
        setIsSuccess(true);

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setIsSuccess(false);
        }, 3000);
      } else {
        setError(
          "Une erreur est survenue lors de l'envoi des emails. Veuillez réessayer."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    isSuccess,
    error,
    handleChange,
    handleSubmit,
  };
};
