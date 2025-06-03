import React from "react";
import { ThirdPartyFormData } from "../../types/thirdParty";

interface ReviewProps {
  formData: Partial<ThirdPartyFormData>;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

const Review: React.FC<ReviewProps> = ({
  formData,
  onSubmit,
  onBack,
  isSubmitting = false,
}) => {
  const renderEntitySpecificInfo = () => {
    switch (formData.entityType) {
      case "SOCIETE":
        return (
          <>
            <div className="border-t-2 border-gray-100 pt-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Informations de la Société
              </h3>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Dénomination Sociale
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.companyInfo?.denominationSociale}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Numéro RCCM
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.companyInfo?.numeroRCCM}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Forme Juridique
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.companyInfo?.formeJuridique}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Activité Principale
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.companyInfo?.activitePrincipale}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        );

      case "PARTICULIER":
        return (
          <>
            <div className="border-t-2 border-gray-100 pt-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Informations Personnelles
              </h3>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-base font-medium text-gray-700">Nom</dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.individualInfo?.nom}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Prénoms
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.individualInfo?.prenoms}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Date de Naissance
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.individualInfo?.dateNaissance}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Profession
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.individualInfo?.profession}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        );

      case "ADMINISTRATION":
        return (
          <>
            <div className="border-t-2 border-gray-100 pt-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Informations de l'Institution
              </h3>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Nom Officiel
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.nomOfficiel}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Catégorie Administrative
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.categorieAdministrative}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Adresse Institutionnelle
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.adresseInstitutionnelle}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Personne de Contact
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.personneContact}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Fonction du Contact
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.fonctionContact}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Téléphone du Contact
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.telephoneContact}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Email du Contact
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.emailContact}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Numéro IFU
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.numeroIFU || "Non renseigné"}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Compte Bancaire
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.compteBancaire}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Référence Interne
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.referenceInterne ||
                      "Non renseigné"}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Acte Déclencheur
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.acteDeclencheur}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Cadre Juridique
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.administrationInfo?.cadreJuridique}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        );
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Révision des Informations
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Veuillez vérifier toutes les informations avant de soumettre
        </p>
      </div>

      <div className="space-y-8">
        {renderEntitySpecificInfo()}

        <div className="border-t-2 border-gray-100 pt-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Informations Générales
          </h3>
          <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="text-base font-medium text-gray-700">Email</dt>
              <dd className="mt-1 text-base text-gray-900">
                {formData.entityType === "SOCIETE"
                  ? formData.companyInfo?.email
                  : formData.entityType === "PARTICULIER"
                  ? formData.individualInfo?.email
                  : formData.administrationInfo?.emailContact}
              </dd>
            </div>
            <div>
              <dt className="text-base font-medium text-gray-700">Téléphone</dt>
              <dd className="mt-1 text-base text-gray-900">
                {formData.entityType === "SOCIETE"
                  ? formData.companyInfo?.telephone
                  : formData.entityType === "PARTICULIER"
                  ? formData.individualInfo?.telephone
                  : formData.administrationInfo?.telephoneContact}
              </dd>
            </div>
          </dl>
        </div>

        {formData.bankingDetails && (
          <div className="border-t-2 border-gray-100 pt-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Informations Bancaires
            </h3>
            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <dt className="text-base font-medium text-gray-700">
                  Nom de la Banque
                </dt>
                <dd className="mt-1 text-base text-gray-900">
                  {formData.bankingDetails.bankName}
                </dd>
              </div>
              <div>
                <dt className="text-base font-medium text-gray-700">
                  Nom du Titulaire
                </dt>
                <dd className="mt-1 text-base text-gray-900">
                  {formData.bankingDetails.accountHolderName}
                </dd>
              </div>
              <div>
                <dt className="text-base font-medium text-gray-700">
                  Numéro de Compte
                </dt>
                <dd className="mt-1 text-base text-gray-900">
                  {formData.bankingDetails.accountNumber}
                </dd>
              </div>
            </dl>
          </div>
        )}
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
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className={`px-6 py-3 text-base font-medium text-white bg-primary border-2 border-transparent rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-primary-dark"
          }`}
        >
          {isSubmitting ? "Soumission en cours..." : "Soumettre"}
        </button>
      </div>
    </div>
  );
};

export default Review;
