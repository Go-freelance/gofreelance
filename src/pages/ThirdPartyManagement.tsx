import EntityTypeSelection from "../components/thirdParty/EntityTypeSelection";
import GeneralInformation from "../components/thirdParty/GeneralInformation";
import IdentificationFiscal from "../components/thirdParty/IdentificationFiscal";
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
    handleIdentificationFiscalSubmit,
    handleBankingDetailsSubmit,
    handleSubmit,
    handleBack,
  } = useThirdPartyForm();

  const steps = [
    { number: 1, label: "Type d'entité" },
    { number: 2, label: "Informations générales" },
    { number: 3, label: "Identification & Fiscal" },
    { number: 4, label: "Informations bancaires" },
    { number: 5, label: "Révision" },
  ];

  const renderStep = () => {
    if (successMessage) {
      return <SuccessStep message={successMessage} />;
    }

    switch (currentStep) {
      case 1:
        return <EntityTypeSelection onSelect={handleEntityTypeSelect} />;
      case 2:
        return (
          <GeneralInformation
            entityType={formData.entityType}
            onSubmit={handleGeneralInfoSubmit}
            onBack={handleBack}
            initialData={formData}
          />
        );
      case 3:
        return (
          <IdentificationFiscal
            entityType={formData.entityType as EntityType}
            onSubmit={handleIdentificationFiscalSubmit}
            onBack={handleBack}
            initialData={formData.identificationFiscal}
          />
        );
      case 4:
        return (
          <BankingDetails
            onSubmit={handleBankingDetailsSubmit}
            onBack={handleBack}
            initialData={formData.bankingDetails}
          />
        );
      case 5:
        return (
          <div className="space-y-6">
            <Review
              formData={formData}
              onSubmit={handleSubmit}
              onBack={handleBack}
              isSubmitting={isSubmitting}
            />

            {error && (
              <div
                className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8 lg:py-12">
      <div className="max-w-4xl mt-20 sm:mt-16 md:mt-20 mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Indicateur de progression*/}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold border-2 transition-all duration-200 ${
                      step.number === currentStep
                        ? "bg-primary text-white border-primary"
                        : step.number < currentStep
                        ? "bg-primary/10 text-primary border-primary"
                        : "bg-white text-gray-400 border-gray-300"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`mt-1 sm:mt-2 text-[10px] sm:text-xs font-medium text-center max-w-[80px] sm:max-w-[100px] ${
                      step.number === currentStep
                        ? "text-primary"
                        : step.number < currentStep
                        ? "text-primary/80"
                        : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contenu du formulaire */}
          <div className="mt-6 sm:mt-8">{renderStep()}</div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyManagement;
