import React, { useState } from "react";
import { CompanyInfo, Contact } from "../../../types/thirdParty";

interface CompanyFieldsProps {
  formData: Partial<CompanyInfo>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

interface CustomChangeEvent {
  target: {
    name: string;
    value: Contact[];
  };
}

const CompanyFields = ({ formData, handleChange }: CompanyFieldsProps) => {
  const [contacts, setContacts] = useState<Contact[]>(
    formData.responsables || [
      {
        civilite: "M",
        nomComplet: "",
        fonction: "",
        phone1: "",
        phone2: "",
        email: "",
      },
    ]
  );

  const [autreFormeJuridique, setAutreFormeJuridique] = useState<string>(
    formData.autreFormeJuridique || ""
  );

  const inputClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";
  const labelClasses = "block text-base font-medium text-gray-700 mb-1";
  const selectClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";
  const sectionClasses =
    "bg-white p-6 rounded-xl shadow-sm border border-gray-200";
  const sectionTitleClasses = "text-xl font-semibold text-gray-900 mb-4";

  const handleContactChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newContacts = [...contacts];
    newContacts[index] = {
      ...newContacts[index],
      [e.target.name]: e.target.value,
    };
    setContacts(newContacts);
    const customEvent: CustomChangeEvent = {
      target: {
        name: "responsables",
        value: newContacts,
      },
    };
    handleChange(customEvent as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  const addContact = () => {
    const newContact: Contact = {
      civilite: "M",
      nomComplet: "",
      fonction: "",
      phone1: "",
      phone2: "",
      email: "",
    };
    setContacts([...contacts, newContact]);
  };

  const removeContact = (index: number) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
    const customEvent: CustomChangeEvent = {
      target: {
        name: "responsables",
        value: newContacts,
      },
    };
    handleChange(customEvent as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  const handleFormeJuridiqueChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    handleChange(e);
    if (e.target.value !== "Autre") {
      setAutreFormeJuridique("");
      const customEvent = {
        target: {
          name: "autreFormeJuridique",
          value: "",
        },
      } as React.ChangeEvent<HTMLInputElement>;
      handleChange(customEvent);
    }
  };

  const handleAutreFormeJuridiqueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setAutreFormeJuridique(value);
    const customEvent = {
      target: {
        name: "autreFormeJuridique",
        value: value,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    handleChange(customEvent);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("logo", file);

      const event = {
        target: {
          name: "logo",
          value: file,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;

      handleChange(event);
    }
  };

  return (
    <div className="space-y-8">
      <div className={sectionClasses}>
        <h3 className={sectionTitleClasses}>Informations de l'entreprise</h3>
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
              onChange={handleFormeJuridiqueChange}
              className={selectClasses}
              required
            >
              <option value="">Sélectionnez une forme juridique</option>
              <option value="SARL">SARL</option>
              <option value="SA">SA</option>
              <option value="SNC">SNC</option>
              <option value="SCS">SCS</option>
              <option value="SCA">SCA</option>
              <option value="Autre">Autre</option>
            </select>
            {formData.formeJuridique === "Autre" && (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Précisez la forme juridique"
                  value={autreFormeJuridique}
                  onChange={handleAutreFormeJuridiqueChange}
                  className={inputClasses}
                  required
                />
              </div>
            )}
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
            <label className={labelClasses}>Site web</label>
            <input
              type="url"
              name="siteWeb"
              value={formData.siteWeb || ""}
              onChange={handleChange}
              placeholder="https://www.example.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>
              Logo de l'entreprise(facultatif)
            </label>
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleLogoChange}
              className={`${inputClasses} file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark`}
            />
            {formData.logo && (
              <p className="mt-2 text-sm text-gray-500">
                Fichier sélectionné : {(formData.logo as File).name}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className={sectionClasses}>
        <h3 className={sectionTitleClasses}>Responsable(s)</h3>
        {contacts.map((contact, index) => (
          <div key={index} className="mb-8 p-6 bg-gray-50 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-medium text-gray-900">
                Contact {index + 1}
              </h4>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeContact(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Supprimer
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Civilité*</label>
                <select
                  name="civilite"
                  value={contact.civilite}
                  onChange={(e) => handleContactChange(index, e)}
                  className={selectClasses}
                  required
                >
                  <option value="M">M</option>
                  <option value="Mme">Mme</option>
                  <option value="Mlle">Mlle</option>
                </select>
              </div>

              <div>
                <label className={labelClasses}>Nom complet*</label>
                <input
                  type="text"
                  name="nomComplet"
                  value={contact.nomComplet}
                  onChange={(e) => handleContactChange(index, e)}
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label className={labelClasses}>Fonction*</label>
                <input
                  type="text"
                  name="fonction"
                  value={contact.fonction}
                  onChange={(e) => handleContactChange(index, e)}
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label className={labelClasses}>Téléphone principal*</label>
                <input
                  type="tel"
                  name="phone1"
                  value={contact.phone1}
                  onChange={(e) => handleContactChange(index, e)}
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label className={labelClasses}>Téléphone secondaire</label>
                <input
                  type="tel"
                  name="phone2"
                  value={contact.phone2}
                  onChange={(e) => handleContactChange(index, e)}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={(e) => handleContactChange(index, e)}
                  className={inputClasses}
                  required
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addContact}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          + Ajouter un contact
        </button>
      </div>
    </div>
  );
};

export default CompanyFields;
