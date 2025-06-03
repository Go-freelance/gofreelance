import EntityTypeSelection from "../components/thirdParty/EntityTypeSelection";
import GeneralInformation from "../components/thirdParty/GeneralInformation";
import BankingDetails from "../components/thirdParty/BankingDetails";
import Review from "../components/thirdParty/Review";
import SuccessStep from "../components/thirdParty/SuccessStep";
import useThirdPartyForm from "../hooks/useThirdPartyForm";
import { EntityType } from "../types/thirdParty";

const ThirdPartyManagement = () => {
  const {
    currentStep,
    formData,
    error,
    successMessage,
    isSubmitting,
    handleEntityTypeSelect,
    handleGeneralInfoSubmit,
    handleBankingDetailsSubmit,
    handleSubmit,
    handleBack,
  } = useThirdPartyForm();

  const steps = [
    { number: 1, label: "Type d'entité" },
    { number: 2, label: "Informations générales" },
    { number: 3, label: "Informations bancaires" },
    { number: 4, label: "Révision" },
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <EntityTypeSelection
            onSelect={handleEntityTypeSelect}
            selectedType={formData.entityType}
          />
        );
      case 2:
        return (
          <GeneralInformation
            entityType={formData.entityType as EntityType}
            onSubmit={handleGeneralInfoSubmit}
            onBack={handleBack}
            initialData={
              formData.entityType === "SOCIETE"
                ? formData.companyInfo
                : formData.entityType === "PARTICULIER"
                ? formData.individualInfo
                : formData.administrationInfo
            }
          />
        );
      case 3:
        return (
          <BankingDetails
            onSubmit={(data) => handleBankingDetailsSubmit(data[0])}
            onBack={handleBack}
            initialData={
              formData.bankingDetails ? formData.bankingDetails : undefined
            }
          />
        );
      case 4:
        return (
          <Review
            formData={formData}
            onSubmit={handleSubmit}
            onBack={handleBack}
            isSubmitting={isSubmitting}
          />
        );
      case 5:
        return (
          <SuccessStep message="Les informations ont été envoyées avec succès" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mt-24">
            <nav aria-label="Progress">
              <ol className="flex items-center justify-center space-x-4 sm:space-x-8 md:space-x-12">
                {steps.map((step) => (
                  <li key={step.number} className="flex flex-col items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-lg sm:text-xl font-bold ${
                        currentStep >= step.number
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step.number}
                    </div>
                    <span
                      className={`mt-2 text-xs sm:text-sm font-medium ${
                        currentStep >= step.number
                          ? "text-primary"
                          : "text-gray-500"
                      }`}
                    >
                      {step.label}
                    </span>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {error && (
            <div className="mt-8 rounded-md bg-red-50 p-4">
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
            <div className="mt-8 rounded-md bg-green-50 p-4">
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

          <div className="mt-8 bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">{renderStep()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyManagement;
