import React from "react";
import { Company } from "../../../types/thirdParty";

interface CompanyFieldsProps {
  formData: Partial<Company>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  inputClasses: string;
  labelClasses: string;
}

const CompanyFields: React.FC<CompanyFieldsProps> = ({
  formData,
  handleChange,
  inputClasses,
  labelClasses,
}) => {
  return (
    <>
      <div className="col-span-6">
        <label htmlFor="companyName" className={labelClasses}>
          Nom de la Société*
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          required
          className={inputClasses}
          value={formData.companyName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="establishmentDate" className={labelClasses}>
          Date de Création
        </label>
        <input
          type="date"
          name="establishmentDate"
          id="establishmentDate"
          className={inputClasses}
          value={formData.establishmentDate || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="website" className={labelClasses}>
          Site Web
        </label>
        <input
          type="url"
          name="website"
          id="website"
          className={inputClasses}
          value={formData.website || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="industry" className={labelClasses}>
          Secteur d'Activité
        </label>
        <input
          type="text"
          name="industry"
          id="industry"
          className={inputClasses}
          value={formData.industry || ""}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default CompanyFields;
