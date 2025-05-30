import { useState } from "react";
import {
  BaseEntity,
  EntityType,
  Company,
  Individual,
  Government,
  LargeAccount,
} from "../types/thirdParty";

interface UseGeneralInformationProps {
  initialData?: Partial<BaseEntity>;
  entityType?: EntityType;
  onSubmit: (data: Partial<BaseEntity>) => void;
}

interface UseGeneralInformationReturn {
  formData: Partial<BaseEntity>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isFormValid: boolean;
  error: string | null;
  successMessage: string | null;
}

const useGeneralInformation = ({
  initialData,
  entityType,
  onSubmit,
}: UseGeneralInformationProps): UseGeneralInformationReturn => {
  const [formData, setFormData] = useState<Partial<BaseEntity>>(
    initialData || {
      address: "",
      city: "",
      stateProvince: "",
      postalCode: "",
      country: "",
      email: "",
      phone: "",
    }
  );
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      onSubmit(formData);
      setSuccessMessage("Les informations ont été enregistrées avec succès.");
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
      setSuccessMessage(null);
    }
  };

  const isFormValid = () => {
    if (!entityType) {
      return false;
    }

    // Champs de base requis pour tous les types d'entités
    const baseRequiredFields = ["address", "city", "country", "email", "phone"];

    // Vérification des champs de base
    const baseFieldsValid = baseRequiredFields.every((field) => {
      const value = formData[field as keyof BaseEntity]?.toString().trim();
      return value !== "";
    });

    // Vérification des champs spécifiques à l'entité
    let entitySpecificFieldsValid = true;
    const individualData = formData as Partial<Individual>;
    let companyName: string | undefined;
    let firstName: string | undefined;
    let lastName: string | undefined;
    let institutionName: string | undefined;
    let corporateName: string | undefined;

    switch (entityType) {
      case "Company":
        companyName = (formData as Partial<Company>).companyName?.trim();
        entitySpecificFieldsValid = !!companyName;
        break;
      case "Individual":
        firstName = individualData.firstName?.trim();
        lastName = individualData.lastName?.trim();
        entitySpecificFieldsValid = !!(firstName && lastName);
        break;
      case "Government":
        institutionName = (
          formData as Partial<Government>
        ).institutionName?.trim();
        entitySpecificFieldsValid = !!institutionName;
        break;
      case "LargeAccount":
        corporateName = (
          formData as Partial<LargeAccount>
        ).corporateName?.trim();
        entitySpecificFieldsValid = !!corporateName;
        break;
    }

    return baseFieldsValid && entitySpecificFieldsValid;
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isFormValid: isFormValid(),
    error,
    successMessage,
  };
};

export default useGeneralInformation;
