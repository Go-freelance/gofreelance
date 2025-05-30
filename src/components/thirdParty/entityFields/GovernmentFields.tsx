import React from "react";
import { Government } from "../../../types/thirdParty";

interface GovernmentFieldsProps {
  formData: Partial<Government>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  inputClasses: string;
  labelClasses: string;
  selectClasses: string;
}

const GovernmentFields: React.FC<GovernmentFieldsProps> = ({
  formData,
  handleChange,
  inputClasses,
  labelClasses,
  selectClasses,
}) => {
  return (
    <>
      <div className="col-span-6">
        <label htmlFor="institutionName" className={labelClasses}>
          Nom de l'Institution*
        </label>
        <input
          type="text"
          name="institutionName"
          id="institutionName"
          required
          className={inputClasses}
          value={formData.institutionName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="institutionType" className={labelClasses}>
          Type d'Institution
        </label>
        <select
          name="institutionType"
          id="institutionType"
          className={selectClasses}
          value={formData.institutionType || ""}
          onChange={handleChange}
        >
          <option value="">Sélectionner</option>
          <option value="ministry">Ministère</option>
          <option value="agency">Agence</option>
          <option value="department">Département</option>
          <option value="other">Autre</option>
        </select>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="foundingDate" className={labelClasses}>
          Date de Création
        </label>
        <input
          type="date"
          name="foundingDate"
          id="foundingDate"
          className={inputClasses}
          value={formData.foundingDate || ""}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default GovernmentFields;
