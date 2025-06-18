import { useState } from "react";
import {
  EntityType,
  ThirdPartyFormData,
  BankingDetails,
  CompanyInfo,
  IndividualInfo,
  AdministrationInfo,
  ThirdPartySubmission,
} from "../types/thirdParty";
import { EmailService } from "../services/emailService";

interface UseThirdPartyFormReturn {
  currentStep: number;
  formData: Partial<ThirdPartyFormData>;
  isSubmitting: boolean;
  error: string | null;
  successMessage: string | null;
  handleEntityTypeSelect: (type: EntityType) => void;
  handleGeneralInfoSubmit: (
    data: Partial<CompanyInfo | IndividualInfo | AdministrationInfo>
  ) => void;
  handleBankingDetailsSubmit: (data: BankingDetails) => void;
  handleSubmit: () => Promise<void>;
  handleBack: () => void;
}

const useThirdPartyForm = (): UseThirdPartyFormReturn => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ThirdPartyFormData>>({
    entityType: undefined,
    bankingDetails: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const emailService = EmailService.getInstance();

  const handleEntityTypeSelect = (type: EntityType) => {
    setFormData((prev) => ({ ...prev, entityType: type }));
    setCurrentStep(2);
  };

  const handleGeneralInfoSubmit = (
    data: Partial<CompanyInfo | IndividualInfo | AdministrationInfo>
  ) => {
    setFormData((prev) => {
      const newData = { ...prev };
      if (prev.entityType === "SOCIETE") {
        newData.companyInfo = data as CompanyInfo;
      } else if (prev.entityType === "PARTICULIER") {
        newData.individualInfo = data as IndividualInfo;
      } else if (prev.entityType === "ADMINISTRATION") {
        newData.administrationInfo = data as AdministrationInfo;
      }
      return newData;
    });
    setCurrentStep(3);
  };

  const handleBankingDetailsSubmit = (data: BankingDetails) => {
    setFormData((prev) => ({
      ...prev,
      bankingDetails: [...(prev.bankingDetails || []), data],
    }));
    setCurrentStep(4);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError(null);

      // Vérification des contacts pour les sociétés
      if (
        formData.entityType === "SOCIETE" &&
        (!formData.companyInfo?.responsables ||
          formData.companyInfo.responsables.length === 0)
      ) {
        throw new Error(
          "Veuillez ajouter au moins un responsable pour la société"
        );
      }

      // Préparation des données pour l'email
      let thirdPartyData: ThirdPartySubmission = {
        entityType: formData.entityType!,
        bankingDetails: formData.bankingDetails || [],
      };

      if (formData.entityType === "SOCIETE") {
        // Vérification que tous les contacts ont les champs obligatoires remplis
        if (!formData.companyInfo) {
          throw new Error("Les informations de la société sont manquantes");
        }

        const invalidContacts = formData.companyInfo.responsables?.some(
          (contact) =>
            !contact.nomComplet ||
            !contact.fonction ||
            !contact.phone1 ||
            !contact.email
        );

        if (invalidContacts) {
          throw new Error(
            "Veuillez remplir tous les champs obligatoires pour chaque responsable"
          );
        }

        // Créer un FormData pour l'envoi du fichier
        const formDataToSend = new FormData();

        // Ajouter les données de base
        formDataToSend.append("entityType", formData.entityType!);
        formDataToSend.append(
          "bankingDetails",
          JSON.stringify(formData.bankingDetails || [])
        );

        // Ajouter les données de la société
        Object.entries(formData.companyInfo).forEach(([key, value]) => {
          if (key === "logo" && value instanceof File) {
            formDataToSend.append("logo", value);
          } else if (key === "responsables") {
            formDataToSend.append("responsables", JSON.stringify(value));
          } else {
            formDataToSend.append(key, value as string);
          }
        });

        // Envoi de l'email avec FormData
        const response = await emailService.sendAdminNotificationNewThirdParty(
          formDataToSend
        );

        if (!response.success) {
          throw new Error(response.message);
        }
      } else if (formData.entityType === "PARTICULIER") {
        thirdPartyData = {
          ...thirdPartyData,
          ...formData.individualInfo,
        };
        const response = await emailService.sendAdminNotificationNewThirdParty(
          thirdPartyData
        );
        if (!response.success) {
          throw new Error(response.message);
        }
      } else if (formData.entityType === "ADMINISTRATION") {
        thirdPartyData = {
          ...thirdPartyData,
          ...formData.administrationInfo,
        };
        const response = await emailService.sendAdminNotificationNewThirdParty(
          thirdPartyData
        );
        if (!response.success) {
          throw new Error(response.message);
        }
      }

      setSuccessMessage("Les informations ont été envoyées avec succès");
      setCurrentStep(5);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue lors de la soumission. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return {
    currentStep,
    formData,
    isSubmitting,
    error,
    successMessage,
    handleEntityTypeSelect,
    handleGeneralInfoSubmit,
    handleBankingDetailsSubmit,
    handleSubmit,
    handleBack,
  };
};

export default useThirdPartyForm;
