import { useState } from "react";
import {
  ThirdParty,
  EntityType,
  IdentificationFiscal,
  BankingDetails,
} from "../types/thirdParty";
import { EmailService } from "../services/emailService";

interface UseThirdPartyFormReturn {
  currentStep: number;
  formData: Partial<ThirdParty>;
  isSubmitting: boolean;
  error: string | null;
  successMessage: string | null;
  handleEntityTypeSelect: (type: EntityType) => void;
  handleGeneralInfoSubmit: (data: Partial<ThirdParty>) => void;
  handleIdentificationFiscalSubmit: (data: IdentificationFiscal) => void;
  handleBankingDetailsSubmit: (data: BankingDetails[]) => void;
  handleSubmit: () => Promise<void>;
  handleBack: () => void;
  handleReset: () => void;
}

const useThirdPartyForm = (): UseThirdPartyFormReturn => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ThirdParty>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const emailService = EmailService.getInstance();

  const handleEntityTypeSelect = (type: EntityType) => {
    if (!type) {
      setError("Le type d'entité est requis");
      return;
    }
    setFormData((prev) => ({ ...prev, entityType: type }));
    setCurrentStep(2);
  };

  const handleGeneralInfoSubmit = (data: Partial<ThirdParty>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(3);
  };

  const handleIdentificationFiscalSubmit = (data: IdentificationFiscal) => {
    setFormData((prev) => ({ ...prev, identificationFiscal: data }));
    setCurrentStep(4);
  };

  const handleBankingDetailsSubmit = (data: BankingDetails[]) => {
    setFormData((prev) => ({ ...prev, bankingDetails: data }));
    setCurrentStep(5);
  };

  const validateFormData = (data: Partial<ThirdParty>): string | null => {
    if (!data.entityType) {
      return "Le type d'entité est requis";
    }

    if (!data.email || !data.phone) {
      return "Les informations de contact sont requises";
    }

    if (
      !data.identificationFiscal?.idNumber ||
      !data.identificationFiscal?.taxIdNumber
    ) {
      return "Les informations d'identification fiscale sont requises";
    }

    if (!data.bankingDetails || data.bankingDetails.length === 0) {
      return "Les informations bancaires sont requises";
    }

    return null;
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError(null);
      setSuccessMessage(null);

      // Validation des données
      const validationError = validateFormData(formData);
      if (validationError) {
        throw new Error(validationError);
      }

      // Envoi de l'email de notification à l'administrateur
      const emailSent = await emailService.sendAdminNotificationNewThirdParty(
        formData as ThirdParty
      );

      if (!emailSent) {
        throw new Error(
          "Une erreur est survenue lors de l'envoi de la notification. Veuillez réessayer."
        );
      }

      // Message de succès
      setSuccessMessage(
        "Le formulaire a été soumis avec succès. Un email de notification a été envoyé à l'administrateur."
      );

      // Attendre 3 secondes avant de réinitialiser le formulaire
      setTimeout(() => {
        handleReset();
      }, 3000);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Une erreur inattendue est survenue. Veuillez réessayer.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setFormData({});
    setError(null);
    setSuccessMessage(null);
  };

  return {
    currentStep,
    formData,
    isSubmitting,
    error,
    successMessage,
    handleEntityTypeSelect,
    handleGeneralInfoSubmit,
    handleIdentificationFiscalSubmit,
    handleBankingDetailsSubmit,
    handleSubmit,
    handleBack,
    handleReset,
  };
};

export default useThirdPartyForm;
