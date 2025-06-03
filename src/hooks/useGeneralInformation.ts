import { useState } from "react";
import {
  EntityType,
  CompanyInfo,
  IndividualInfo,
  AdministrationInfo,
} from "../types/thirdParty";

interface UseGeneralInformationProps {
  initialData?: Partial<CompanyInfo | IndividualInfo | AdministrationInfo>;
  entityType?: EntityType;
  onSubmit: (
    data: Partial<CompanyInfo | IndividualInfo | AdministrationInfo>
  ) => void;
}

interface UseGeneralInformationReturn {
  formData: Partial<CompanyInfo | IndividualInfo | AdministrationInfo>;
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
  const [formData, setFormData] = useState<
    Partial<CompanyInfo | IndividualInfo | AdministrationInfo>
  >(initialData || {});
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

    // Vérification des champs spécifiques à l'entité
    let entitySpecificFieldsValid = true;
    const companyData = formData as Partial<CompanyInfo>;
    const individualData = formData as Partial<IndividualInfo>;
    const administrationData = formData as Partial<AdministrationInfo>;

    switch (entityType) {
      case "SOCIETE":
        entitySpecificFieldsValid = !!(
          companyData.denominationSociale?.trim() &&
          companyData.numeroRCCM?.trim() &&
          companyData.formeJuridique?.trim() &&
          companyData.numeroIDNAT?.trim() &&
          companyData.numeroNIF?.trim() &&
          companyData.siegeSocial?.trim() &&
          companyData.activitePrincipale?.trim() &&
          companyData.capitalSocial?.trim() &&
          companyData.dirigeants?.trim() &&
          companyData.dateCreation?.trim() &&
          companyData.telephone?.trim() &&
          companyData.email?.trim()
        );
        break;

      case "PARTICULIER":
        entitySpecificFieldsValid = !!(
          individualData.nom?.trim() &&
          individualData.prenoms?.trim() &&
          individualData.dateNaissance?.trim() &&
          individualData.lieuNaissance?.trim() &&
          individualData.nationalite?.trim() &&
          individualData.typeDocument?.trim() &&
          individualData.numeroDocument?.trim() &&
          individualData.dateExpiration?.trim() &&
          individualData.adresse?.trim() &&
          individualData.profession?.trim() &&
          individualData.employeur?.trim() &&
          individualData.telephone?.trim() &&
          individualData.email?.trim()
        );
        break;

      case "ADMINISTRATION":
        entitySpecificFieldsValid = !!(
          administrationData.nomOfficiel?.trim() &&
          administrationData.categorieAdministrative?.trim() &&
          administrationData.adresseInstitutionnelle?.trim() &&
          administrationData.personneContact?.trim() &&
          administrationData.fonctionContact?.trim() &&
          administrationData.telephoneContact?.trim() &&
          administrationData.emailContact?.trim() &&
          administrationData.compteBancaire?.trim() &&
          administrationData.acteDeclencheur?.trim() &&
          administrationData.cadreJuridique?.trim()
        );
        break;
    }

    return entitySpecificFieldsValid;
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
