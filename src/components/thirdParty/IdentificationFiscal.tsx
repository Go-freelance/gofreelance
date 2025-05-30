import React, { useState } from "react";
import {
  EntityType,
  IdentificationFiscal as IdentificationFiscalType,
} from "../../types/thirdParty";

interface IdentificationFiscalProps {
  entityType: EntityType;
  onSubmit: (data: IdentificationFiscalType) => void;
  initialData?: IdentificationFiscalType;
  onBack: () => void;
}

const IdentificationFiscal: React.FC<IdentificationFiscalProps> = ({
  onSubmit,
  onBack,
}) => {
  const [formData, setFormData] = useState<IdentificationFiscalType>({
    idNumber: "",
    taxIdNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";
  const labelClasses = "block text-base font-medium text-gray-700 mb-1";
  const selectClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Identification & Fiscal
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Veuillez fournir les informations d'identification et fiscales
        </p>
      </div>

      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="idType" className={labelClasses}>
            Type d'Identification
          </label>
          <select
            name="idType"
            id="idType"
            className={selectClasses}
            onChange={handleChange}
          >
            <option value="">Sélectionner</option>
            <option value="national_id">Carte d'Identité Nationale</option>
            <option value="passport">Passeport</option>
            <option value="drivers_license">Permis de Conduire</option>
            <option value="business_registration">
              Enregistrement d'Entreprise
            </option>
            <option value="other">Autre</option>
          </select>
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="idNumber" className={labelClasses}>
            Numéro d'Identification*
          </label>
          <input
            type="text"
            name="idNumber"
            id="idNumber"
            required
            className={inputClasses}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="issuingAuthority" className={labelClasses}>
            Autorité Émettrice
          </label>
          <input
            type="text"
            name="issuingAuthority"
            id="issuingAuthority"
            className={inputClasses}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="nationality" className={labelClasses}>
            Nationalité
          </label>
          <input
            type="text"
            name="nationality"
            id="nationality"
            className={inputClasses}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="taxIdNumber" className={labelClasses}>
            Numéro d'Identification Fiscale*
          </label>
          <input
            type="text"
            name="taxIdNumber"
            id="taxIdNumber"
            required
            className={inputClasses}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="taxResidenceCountry" className={labelClasses}>
            Pays de Résidence Fiscale
          </label>
          <input
            type="text"
            name="taxResidenceCountry"
            id="taxResidenceCountry"
            className={inputClasses}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="vatRegistration" className={labelClasses}>
            Numéro de TVA (si applicable)
          </label>
          <input
            type="text"
            name="vatRegistration"
            id="vatRegistration"
            className={inputClasses}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-6">
          <label htmlFor="businessActivity" className={labelClasses}>
            Activité Commerciale
          </label>
          <input
            type="text"
            name="businessActivity"
            id="businessActivity"
            className={inputClasses}
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
          className="px-6 py-3 text-base font-medium text-white bg-primary border-2 border-transparent rounded-xl shadow-sm hover:bg-primary-dark transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
        >
          Suivant
        </button>
      </div>
    </form>
  );
};

export default IdentificationFiscal;
