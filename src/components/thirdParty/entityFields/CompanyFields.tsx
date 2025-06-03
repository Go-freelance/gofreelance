import React from "react";
import { CompanyInfo } from "../../../types/thirdParty";

interface CompanyFieldsProps {
  formData: Partial<CompanyInfo>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const CompanyFields = ({ formData, handleChange }: CompanyFieldsProps) => {
  const inputClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";
  const labelClasses = "block text-base font-medium text-gray-700 mb-1";
  const selectClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className={labelClasses}>Dénomination sociale*</label>
        <input
          type="text"
          name="denominationSociale"
          value={formData.denominationSociale || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Numéro RCCM*</label>
        <input
          type="text"
          name="numeroRCCM"
          value={formData.numeroRCCM || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Forme juridique*</label>
        <select
          name="formeJuridique"
          value={formData.formeJuridique || ""}
          onChange={handleChange}
          className={selectClasses}
          required
        >
          <option value="">Sélectionnez une forme juridique</option>
          <option value="SARL">SARL</option>
          <option value="SA">SA</option>
          <option value="SNC">SNC</option>
          <option value="SCS">SCS</option>
          <option value="SCA">SCA</option>
        </select>
      </div>

      <div>
        <label className={labelClasses}>Numéro ID NAT*</label>
        <input
          type="text"
          name="numeroIDNAT"
          value={formData.numeroIDNAT || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Numéro NIF*</label>
        <input
          type="text"
          name="numeroNIF"
          value={formData.numeroNIF || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Siège social*</label>
        <input
          type="text"
          name="siegeSocial"
          value={formData.siegeSocial || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Activité principale*</label>
        <input
          type="text"
          name="activitePrincipale"
          value={formData.activitePrincipale || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Capital social*</label>
        <input
          type="text"
          name="capitalSocial"
          value={formData.capitalSocial || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Dirigeants*</label>
        <input
          type="text"
          name="dirigeants"
          value={formData.dirigeants || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Date de création*</label>
        <input
          type="date"
          name="dateCreation"
          value={formData.dateCreation || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Téléphone*</label>
        <input
          type="tel"
          name="telephone"
          value={formData.telephone || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>
    </div>
  );
};

export default CompanyFields;
