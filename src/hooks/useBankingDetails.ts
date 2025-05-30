import { useState } from "react";
import { BankingDetails } from "../types/thirdParty";

interface UseBankingDetailsProps {
  initialAccounts?: BankingDetails[];
  onSubmit: (data: BankingDetails[]) => void;
}

interface UseBankingDetailsReturn {
  bankAccounts: BankingDetails[];
  handleChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  addBankAccount: () => void;
  removeBankAccount: (index: number) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isFormValid: boolean;
}

const useBankingDetails = ({
  initialAccounts,
  onSubmit,
}: UseBankingDetailsProps): UseBankingDetailsReturn => {
  const [bankAccounts, setBankAccounts] = useState<BankingDetails[]>(
    initialAccounts || [
      {
        bankName: "",
        accountHolderName: "",
        accountCurrency: "",
        accountNumber: "",
      },
    ]
  );

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newBankAccounts = [...bankAccounts];
    newBankAccounts[index] = {
      ...newBankAccounts[index],
      [name]: value,
    };
    setBankAccounts(newBankAccounts);
  };

  const addBankAccount = () => {
    setBankAccounts([
      ...bankAccounts,
      {
        bankName: "",
        accountHolderName: "",
        accountCurrency: "",
        accountNumber: "",
      },
    ]);
  };

  const removeBankAccount = (index: number) => {
    if (bankAccounts.length > 1) {
      const newBankAccounts = bankAccounts.filter((_, i) => i !== index);
      setBankAccounts(newBankAccounts);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(bankAccounts);
  };

  const isFormValid = bankAccounts.every(
    (account) =>
      account.bankName &&
      account.accountHolderName &&
      account.accountCurrency &&
      account.accountNumber
  );

  return {
    bankAccounts,
    handleChange,
    addBankAccount,
    removeBankAccount,
    handleSubmit,
    isFormValid,
  };
};

export default useBankingDetails;
