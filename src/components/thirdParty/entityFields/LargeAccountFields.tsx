import React from "react";
import { LargeAccount } from "../../../types/thirdParty";

interface LargeAccountFieldsProps {
  formData: Partial<LargeAccount>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  inputClasses: string;
  labelClasses: string;
}

const LargeAccountFields: React.FC<LargeAccountFieldsProps> = ({
  formData,
  handleChange,
  inputClasses,
  labelClasses,
}) => {
  return (
    <>
      <div className="col-span-6">
        <label htmlFor="corporateName" className={labelClasses}>
          Nom de l'Entreprise*
        </label>
        <input
          type="text"
          name="corporateName"
          id="corporateName"
          required
          className={inputClasses}
          value={formData.corporateName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="corporateGroup" className={labelClasses}>
          Groupe
        </label>
        <input
          type="text"
          name="corporateGroup"
          id="corporateGroup"
          className={inputClasses}
          value={formData.corporateGroup || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="yearEstablished" className={labelClasses}>
          Année de Création
        </label>
        <input
          type="text"
          name="yearEstablished"
          id="yearEstablished"
          placeholder="ex: 1985"
          className={inputClasses}
          value={formData.yearEstablished || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="numberOfEmployees" className={labelClasses}>
          Nombre d'Employés
        </label>
        <input
          type="text"
          name="numberOfEmployees"
          id="numberOfEmployees"
          placeholder="ex: 5000+"
          className={inputClasses}
          value={formData.numberOfEmployees || ""}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default LargeAccountFields;
