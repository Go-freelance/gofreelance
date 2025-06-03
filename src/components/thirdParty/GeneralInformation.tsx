import {
  EntityType,
  CompanyInfo,
  IndividualInfo,
  AdministrationInfo,
} from "../../types/thirdParty";
import useGeneralInformation from "../../hooks/useGeneralInformation";
import CompanyFields from "./entityFields/CompanyFields";
import IndividualFields from "./entityFields/IndividualFields";
import AdministrationFields from "./entityFields/AdministrationFields";

interface GeneralInformationProps {
  entityType: EntityType;
  onSubmit: (
    data: Partial<CompanyInfo | IndividualInfo | AdministrationInfo>
  ) => void;
  onBack: () => void;
  initialData?: CompanyInfo | IndividualInfo | AdministrationInfo;
}

const GeneralInformation = ({
  entityType,
  onSubmit,
  onBack,
  initialData,
}: GeneralInformationProps) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isFormValid,
    error,
    successMessage,
  } = useGeneralInformation({
    initialData,
    entityType,
    onSubmit,
  });

  const renderEntityFields = () => {
    switch (entityType) {
      case "SOCIETE":
        return (
          <CompanyFields
            formData={formData as Partial<CompanyInfo>}
            handleChange={handleChange}
          />
        );
      case "PARTICULIER":
        return (
          <IndividualFields
            formData={formData as Partial<IndividualInfo>}
            handleChange={handleChange}
          />
        );
      case "ADMINISTRATION":
        return (
          <AdministrationFields
            formData={formData as Partial<AdministrationInfo>}
            handleChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Informations Générales
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Veuillez fournir les informations générales de l'entité
        </p>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Une erreur est survenue
              </h3>
              <div className="mt-2 text-sm text-red-700">{error}</div>
            </div>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Succès</h3>
              <div className="mt-2 text-sm text-green-700">
                {successMessage}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">{renderEntityFields()}</div>

      <div className="flex justify-between items-center pt-6">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 text-base font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
        >
          Retour
        </button>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`px-6 py-3 text-base font-medium text-white bg-primary border-2 border-transparent rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 ${
            isFormValid
              ? "hover:bg-primary-dark"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          Suivant
        </button>
      </div>
    </form>
  );
};

export default GeneralInformation;
