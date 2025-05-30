import React from "react";
import { BankingDetails as BankingDetailsType } from "../../types/thirdParty";
import useBankingDetails from "../../hooks/useBankingDetails";

interface BankingDetailsProps {
  onSubmit: (data: BankingDetailsType[]) => void;
  onBack: () => void;
  initialAccounts?: BankingDetailsType[];
  initialData?: BankingDetailsType[];
}

const BankingDetails: React.FC<BankingDetailsProps> = ({
  onSubmit,
  onBack,
  initialAccounts,
}) => {
  const {
    bankAccounts,
    handleChange,
    addBankAccount,
    removeBankAccount,
    handleSubmit,
    isFormValid,
  } = useBankingDetails({
    initialAccounts,
    onSubmit,
  });

  const inputClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";
  const labelClasses = "block text-base font-medium text-gray-700 mb-1";
  const selectClasses =
    "mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Informations Bancaires
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Veuillez fournir les informations bancaires pour le traitement des
          paiements
        </p>
      </div>

      {bankAccounts.map((account, index) => (
        <div key={index} className="space-y-8 border-b-2 border-gray-100 pb-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Compte Bancaire {index + 1}
            </h3>
            {bankAccounts.length > 1 && (
              <button
                type="button"
                onClick={() => removeBankAccount(index)}
                className="text-base text-red-600 hover:text-red-800 transition-colors duration-200"
              >
                Supprimer
              </button>
            )}
          </div>

          <div className="grid grid-cols-6 gap-8">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor={`bankName-${index}`} className={labelClasses}>
                Nom de la Banque*
              </label>
              <input
                type="text"
                name="bankName"
                id={`bankName-${index}`}
                required
                className={inputClasses}
                value={account.bankName}
                onChange={(e) => handleChange(index, e)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor={`branchName-${index}`} className={labelClasses}>
                Nom de l'Agence
              </label>
              <input
                type="text"
                name="branchName"
                id={`branchName-${index}`}
                className={inputClasses}
                value={account.branchName || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor={`accountHolderName-${index}`}
                className={labelClasses}
              >
                Nom du Titulaire du Compte*
              </label>
              <input
                type="text"
                name="accountHolderName"
                id={`accountHolderName-${index}`}
                required
                className={inputClasses}
                value={account.accountHolderName}
                onChange={(e) => handleChange(index, e)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor={`accountCurrency-${index}`}
                className={labelClasses}
              >
                Devise du Compte*
              </label>
              <select
                name="accountCurrency"
                id={`accountCurrency-${index}`}
                required
                className={selectClasses}
                value={account.accountCurrency}
                onChange={(e) => handleChange(index, e)}
              >
                <option value="">Sélectionner</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CDF">CDF</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
              </select>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor={`accountNumber-${index}`}
                className={labelClasses}
              >
                Numéro de Compte*
              </label>
              <input
                type="text"
                name="accountNumber"
                id={`accountNumber-${index}`}
                required
                className={inputClasses}
                value={account.accountNumber}
                onChange={(e) => handleChange(index, e)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor={`swiftBicCode-${index}`} className={labelClasses}>
                Code SWIFT/BIC
              </label>
              <input
                type="text"
                name="swiftBicCode"
                id={`swiftBicCode-${index}`}
                className={inputClasses}
                value={account.swiftBicCode || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </div>

            <div className="col-span-6">
              <label htmlFor={`iban-${index}`} className={labelClasses}>
                IBAN
              </label>
              <input
                type="text"
                name="iban"
                id={`iban-${index}`}
                className={inputClasses}
                value={account.iban || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={addBankAccount}
          className="inline-flex items-center px-6 py-3 text-base font-medium text-primary bg-white border-2 border-primary rounded-xl hover:bg-primary/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
        >
          Ajouter un Compte Bancaire
        </button>
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
          disabled={!isFormValid}
          className={`px-6 py-3 text-base font-medium text-white bg-primary border-2 border-transparent rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 ${
            isFormValid
              ? "hover:bg-primary-dark"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          Suivant
        </button>
      </div>
    </form>
  );
};

export default BankingDetails;
