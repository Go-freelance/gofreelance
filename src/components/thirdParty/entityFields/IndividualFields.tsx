import React from "react";
import { IndividualInfo } from "../../../types/thirdParty";

interface IndividualFieldsProps {
  formData: Partial<IndividualInfo>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const IndividualFields = ({
  formData,
  handleChange,
}: IndividualFieldsProps) => {
  const inputClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";
  const labelClasses = "block text-base font-medium text-gray-700 mb-1";
  const selectClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className={labelClasses}>Nom*</label>
        <input
          type="text"
          name="nom"
          value={formData.nom || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Prénoms*</label>
        <input
          type="text"
          name="prenoms"
          value={formData.prenoms || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Date de naissance*</label>
        <input
          type="date"
          name="dateNaissance"
          value={formData.dateNaissance || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Lieu de naissance*</label>
        <input
          type="text"
          name="lieuNaissance"
          value={formData.lieuNaissance || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Nationalité*</label>
        <input
          type="text"
          name="nationalite"
          value={formData.nationalite || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Type de document*</label>
        <select
          name="typeDocument"
          value={formData.typeDocument || ""}
          onChange={handleChange}
          className={selectClasses}
          required
        >
          <option value="">Sélectionnez un type</option>
          <option value="CNI">Carte d'identité nationale</option>
          <option value="PASSEPORT">Passeport</option>
        </select>
      </div>

      <div>
        <label className={labelClasses}>Numéro de document*</label>
        <input
          type="text"
          name="numeroDocument"
          value={formData.numeroDocument || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Date d'expiration*</label>
        <input
          type="date"
          name="dateExpiration"
          value={formData.dateExpiration || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Adresse*</label>
        <input
          type="text"
          name="adresse"
          value={formData.adresse || ""}
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

      <div>
        <label className={labelClasses}>Profession*</label>
        <input
          type="text"
          name="profession"
          value={formData.profession || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Employeur*</label>
        <input
          type="text"
          name="employeur"
          value={formData.employeur || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>
    </div>
  );
};

export default IndividualFields;
