import React from "react";
import { ThirdParty } from "../../types/thirdParty";

interface ReviewProps {
  formData: Partial<ThirdParty>;
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
      case "Company":
        return (
          <>
            <div className="border-t-2 border-gray-100 pt-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Informations de la Société
              </h3>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Nom de la Société
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.companyName}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Date de Création
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.establishmentDate}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Site Web
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.website}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Secteur d'Activité
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.industry}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        );

      case "Individual":
        return (
          <>
            <div className="border-t-2 border-gray-100 pt-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Informations Personnelles
              </h3>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Prénom
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.firstName}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">Nom</dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.lastName}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Date de Naissance
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.dateOfBirth}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Profession
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.profession}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        );

      case "Government":
        return (
          <>
            <div className="border-t-2 border-gray-100 pt-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Informations de l'Institution
              </h3>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Nom de l'Institution
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.institutionName}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Type d'Institution
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.institutionType}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Date de Création
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.foundingDate}
                  </dd>
                </div>
              </dl>
            </div>
          </>
        );

      case "LargeAccount":
        return (
          <>
            <div className="border-t-2 border-gray-100 pt-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Informations de l'Entreprise
              </h3>
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Nom de l'Entreprise
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.corporateName}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Groupe
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.corporateGroup}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Année de Création
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.yearEstablished}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-700">
                    Nombre d'Employés
                  </dt>
                  <dd className="mt-1 text-base text-gray-900">
                    {formData.numberOfEmployees}
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
            Informations de Contact
          </h3>
          <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="text-base font-medium text-gray-700">Adresse</dt>
              <dd className="mt-1 text-base text-gray-900">
                {formData.address}
              </dd>
            </div>
            <div>
              <dt className="text-base font-medium text-gray-700">Ville</dt>
              <dd className="mt-1 text-base text-gray-900">{formData.city}</dd>
            </div>
            <div>
              <dt className="text-base font-medium text-gray-700">
                Province/État
              </dt>
              <dd className="mt-1 text-base text-gray-900">
                {formData.stateProvince}
              </dd>
            </div>
            <div>
              <dt className="text-base font-medium text-gray-700">
                Code Postal
              </dt>
              <dd className="mt-1 text-base text-gray-900">
                {formData.postalCode}
              </dd>
            </div>
            <div>
              <dt className="text-base font-medium text-gray-700">Pays</dt>
              <dd className="mt-1 text-base text-gray-900">
                {formData.country}
              </dd>
            </div>
            <div>
              <dt className="text-base font-medium text-gray-700">Email</dt>
              <dd className="mt-1 text-base text-gray-900">{formData.email}</dd>
            </div>
            <div>
              <dt className="text-base font-medium text-gray-700">Téléphone</dt>
              <dd className="mt-1 text-base text-gray-900">{formData.phone}</dd>
            </div>
          </dl>
        </div>

        {formData.identificationFiscal && (
          <div className="border-t-2 border-gray-100 pt-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Identification & Fiscal
            </h3>
            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <dt className="text-base font-medium text-gray-700">
                  Type d'Identification
                </dt>
                <dd className="mt-1 text-base text-gray-900">
                  {formData.identificationFiscal.idType}
                </dd>
              </div>
              <div>
                <dt className="text-base font-medium text-gray-700">
                  Numéro d'Identification
                </dt>
                <dd className="mt-1 text-base text-gray-900">
                  {formData.identificationFiscal.idNumber}
                </dd>
              </div>
              <div>
                <dt className="text-base font-medium text-gray-700">
                  Numéro d'Identification Fiscale
                </dt>
                <dd className="mt-1 text-base text-gray-900">
                  {formData.identificationFiscal.taxIdNumber}
                </dd>
              </div>
              <div>
                <dt className="text-base font-medium text-gray-700">
                  Numéro de TVA
                </dt>
                <dd className="mt-1 text-base text-gray-900">
                  {formData.identificationFiscal.vatRegistration}
                </dd>
              </div>
            </dl>
          </div>
        )}

        {formData.bankingDetails && formData.bankingDetails.length > 0 && (
          <div className="border-t-2 border-gray-100 pt-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Informations Bancaires
            </h3>
            {formData.bankingDetails.map((account, index) => (
              <div key={index} className="mt-6">
                <h4 className="text-lg font-medium text-gray-900">
                  Compte Bancaire {index + 1}
                </h4>
                <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-base font-medium text-gray-700">
                      Nom de la Banque
                    </dt>
                    <dd className="mt-1 text-base text-gray-900">
                      {account.bankName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-base font-medium text-gray-700">
                      Nom du Titulaire
                    </dt>
                    <dd className="mt-1 text-base text-gray-900">
                      {account.accountHolderName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-base font-medium text-gray-700">
                      Devise
                    </dt>
                    <dd className="mt-1 text-base text-gray-900">
                      {account.accountCurrency}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-base font-medium text-gray-700">
                      Numéro de Compte
                    </dt>
                    <dd className="mt-1 text-base text-gray-900">
                      {account.accountNumber}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
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
