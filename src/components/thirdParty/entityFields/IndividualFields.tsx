import React from "react";
import { Individual } from "../../../types/thirdParty";

interface IndividualFieldsProps {
  formData: Partial<Individual>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  inputClasses: string;
  labelClasses: string;
}

const IndividualFields: React.FC<IndividualFieldsProps> = ({
  formData,
  handleChange,
  inputClasses,
  labelClasses,
}) => {
  return (
    <>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="firstName" className={labelClasses}>
          Prénom*
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          className={inputClasses}
          value={formData.firstName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="lastName" className={labelClasses}>
          Nom*
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          className={inputClasses}
          value={formData.lastName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="dateOfBirth" className={labelClasses}>
          Date de Naissance
        </label>
        <input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          className={inputClasses}
          value={formData.dateOfBirth || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label htmlFor="profession" className={labelClasses}>
          Profession
        </label>
        <input
          type="text"
          name="profession"
          id="profession"
          className={inputClasses}
          value={formData.profession || ""}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default IndividualFields;
