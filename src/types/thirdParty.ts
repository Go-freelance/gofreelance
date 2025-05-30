export type EntityType =
  | "Company"
  | "Individual"
  | "Government"
  | "LargeAccount";

export interface BaseEntity {
  entityType: EntityType;
  address: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
  email: string;
  phone: string;
}

export interface Company extends BaseEntity {
  entityType: "Company";
  companyName: string;
  establishmentDate?: string;
  website?: string;
  industry?: string;
  contactPerson?: string;
  jobTitle?: string;
}

export interface Individual extends BaseEntity {
  entityType: "Individual";
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  profession?: string;
  alternatePhone?: string;
}

export interface Government extends BaseEntity {
  entityType: "Government";
  institutionName: string;
  institutionType?: string;
  foundingDate?: string;
  jurisdictionLevel?: string;
  contactPerson?: string;
  jobTitle?: string;
}

export interface LargeAccount extends BaseEntity {
  entityType: "LargeAccount";
  corporateName: string;
  corporateGroup?: string;
  yearEstablished?: string;
  numberOfEmployees?: string;
  industry?: string;
  primaryContactPerson?: string;
  jobTitle?: string;
  alternateContact?: string;
}

export interface IdentificationFiscal {
  idType?: string;
  idNumber: string;
  issuingAuthority?: string;
  nationality?: string;
  taxIdNumber: string;
  taxResidenceCountry?: string;
  vatRegistration?: string;
  businessActivity?: string;
}

export interface BankingDetails {
  bankName: string;
  branchName?: string;
  accountHolderName: string;
  accountCurrency: string;
  accountNumber: string;
  swiftBicCode?: string;
  iban?: string;
}

export type ThirdParty = (Company | Individual | Government | LargeAccount) & {
  identificationFiscal: IdentificationFiscal;
  bankingDetails: BankingDetails[];
};
