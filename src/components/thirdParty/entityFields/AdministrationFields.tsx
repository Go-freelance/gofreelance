import { AdministrationInfo } from "../../../types/thirdParty";

interface AdministrationFieldsProps {
  formData: Partial<AdministrationInfo>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const AdministrationFields = ({
  formData,
  handleChange,
}: AdministrationFieldsProps) => {
  const inputClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";
  const labelClasses = "block text-base font-medium text-gray-700 mb-1";
  const selectClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className={labelClasses}>Nom officiel*</label>
        <input
          type="text"
          name="nomOfficiel"
          value={formData.nomOfficiel || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Catégorie administrative*</label>
        <select
          name="categorieAdministrative"
          value={formData.categorieAdministrative || ""}
          onChange={handleChange}
          className={selectClasses}
          required
        >
          <option value="">Sélectionnez une catégorie</option>
          <option value="MINISTERE">Ministère</option>
          <option value="SECRETARIAT">Secrétariat général</option>
          <option value="ETABLISSEMENT">Établissement public</option>
          <option value="ENTREPRISE">
            Entreprise du portefeuille de l'État
          </option>
          <option value="COLLECTIVITE">Collectivité territoriale</option>
        </select>
      </div>

      <div>
        <label className={labelClasses}>Adresse institutionnelle*</label>
        <input
          type="text"
          name="adresseInstitutionnelle"
          value={formData.adresseInstitutionnelle || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Personne de contact*</label>
        <input
          type="text"
          name="personneContact"
          value={formData.personneContact || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Fonction du contact*</label>
        <input
          type="text"
          name="fonctionContact"
          value={formData.fonctionContact || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Téléphone du contact*</label>
        <input
          type="tel"
          name="telephoneContact"
          value={formData.telephoneContact || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Email du contact*</label>
        <input
          type="email"
          name="emailContact"
          value={formData.emailContact || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Numéro IFU</label>
        <input
          type="text"
          name="numeroIFU"
          value={formData.numeroIFU || ""}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label className={labelClasses}>Compte bancaire*</label>
        <input
          type="text"
          name="compteBancaire"
          value={formData.compteBancaire || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Référence interne</label>
        <input
          type="text"
          name="referenceInterne"
          value={formData.referenceInterne || ""}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label className={labelClasses}>Acte déclencheur*</label>
        <input
          type="text"
          name="acteDeclencheur"
          value={formData.acteDeclencheur || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className={labelClasses}>Cadre juridique*</label>
        <input
          type="text"
          name="cadreJuridique"
          value={formData.cadreJuridique || ""}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>
    </div>
  );
};

export default AdministrationFields;
