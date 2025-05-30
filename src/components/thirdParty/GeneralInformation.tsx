import React from "react";
import {
  BaseEntity,
  EntityType,
  Company,
  Government,
  Individual,
  LargeAccount,
} from "../../types/thirdParty";
import useGeneralInformation from "../../hooks/useGeneralInformation";
import CompanyFields from "./entityFields/CompanyFields";
import IndividualFields from "./entityFields/IndividualFields";
import GovernmentFields from "./entityFields/GovernmentFields";
import LargeAccountFields from "./entityFields/LargeAccountFields";

interface GeneralInformationProps {
  entityType: EntityType | undefined;
  onSubmit: (data: Partial<BaseEntity>) => void;
  onBack: () => void;
  initialData?: Partial<BaseEntity>;
}

const GeneralInformation: React.FC<GeneralInformationProps> = ({
  entityType,
  onSubmit,
  onBack,
  initialData,
}) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isFormValid,
    error,
    successMessage,
  } = useGeneralInformation({
    initialData,
    onSubmit,
    entityType,
  });

  if (!entityType) {
    return (
      <div className="text-center text-red-600">
        Veuillez sélectionner un type d'entité
      </div>
    );
  }

  const inputClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";
  const labelClasses = "block text-base font-medium text-gray-700 mb-1";
  const selectClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";

  const renderEntitySpecificFields = () => {
    switch (entityType) {
      case "Company":
        return (
          <CompanyFields
            formData={formData as Partial<Company>}
            handleChange={handleChange}
            inputClasses={inputClasses}
            labelClasses={labelClasses}
          />
        );
      case "Individual":
        return (
          <IndividualFields
            formData={formData as Partial<Individual>}
            handleChange={handleChange}
            inputClasses={inputClasses}
            labelClasses={labelClasses}
          />
        );
      case "Government":
        return (
          <GovernmentFields
            formData={formData as Partial<Government>}
            handleChange={handleChange}
            inputClasses={inputClasses}
            labelClasses={labelClasses}
            selectClasses={selectClasses}
          />
        );
      case "LargeAccount":
        return (
          <LargeAccountFields
            formData={formData as Partial<LargeAccount>}
            handleChange={handleChange}
            inputClasses={inputClasses}
            labelClasses={labelClasses}
          />
        );
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

      <div className="grid grid-cols-6 gap-8">
        {renderEntitySpecificFields()}

        <div className="col-span-6">
          <label htmlFor="address" className={labelClasses}>
            Adresse*
          </label>
          <input
            type="text"
            name="address"
            id="address"
            required
            className={inputClasses}
            value={formData.address || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="city" className={labelClasses}>
            Ville*
          </label>
          <input
            type="text"
            name="city"
            id="city"
            required
            className={inputClasses}
            value={formData.city || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="stateProvince" className={labelClasses}>
            Province/Région
          </label>
          <input
            type="text"
            name="stateProvince"
            id="stateProvince"
            className={inputClasses}
            value={formData.stateProvince || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="postalCode" className={labelClasses}>
            Code Postal
          </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            className={inputClasses}
            value={formData.postalCode || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="country" className={labelClasses}>
            Pays*
          </label>
          <input
            type="text"
            name="country"
            id="country"
            required
            className={inputClasses}
            value={formData.country || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="email" className={labelClasses}>
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={inputClasses}
            value={formData.email || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="phone" className={labelClasses}>
            Téléphone*
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className={inputClasses}
            value={formData.phone || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-between pt-8">
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

      {error && (
        <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {successMessage && (
        <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
          <p className="text-green-600">{successMessage}</p>
        </div>
      )}
    </form>
  );
};

export default GeneralInformation;
