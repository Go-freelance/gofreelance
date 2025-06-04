export type EntityType = "SOCIETE" | "PARTICULIER" | "ADMINISTRATION";

export type Civilite = "M" | "Mme" | "Mlle";

export interface Contact {
  civilite: Civilite;
  nomComplet: string;
  fonction: string;
  phone1: string;
  phone2?: string;
  email: string;
}

export interface CompanyInfo {
  denominationSociale: string;
  numeroRCCM: string;
  formeJuridique: string;
  numeroIDNAT: string;
  numeroNIF: string;
  siegeSocial: string;
  activitePrincipale: string;
  capitalSocial: string;
  telephone: string;
  email: string;
  responsables: Contact[];
}

export interface IndividualInfo {
  nom: string;
  prenoms: string;
  dateNaissance: string;
  lieuNaissance: string;
  nationalite: string;
  numeroDocument: string;
  typeDocument: string;
  dateExpiration: string;
  adresse: string;
  telephone: string;
  email: string;
  profession: string;
  employeur: string;
  sourceFinancement?: string;
}

export interface AdministrationInfo {
  nomOfficiel: string;
  categorieAdministrative: string;
  adresseInstitutionnelle: string;
  personneContact: string;
  fonctionContact: string;
  telephoneContact: string;
  emailContact: string;
  numeroIFU?: string;
  compteBancaire: string;
  referenceInterne?: string;
  acteDeclencheur: string;
  cadreJuridique: string;
}

export interface ThirdPartyFormData {
  entityType?: EntityType;
  companyInfo?: CompanyInfo;
  individualInfo?: IndividualInfo;
  administrationInfo?: AdministrationInfo;
  bankingDetails: BankingDetails[];
}

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
  entityType: "SOCIETE";
  companyName: string;
  establishmentDate?: string;
  website?: string;
  industry?: string;
  contactPerson?: string;
  jobTitle?: string;
}

export interface Individual extends BaseEntity {
  entityType: "PARTICULIER";
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  profession?: string;
  alternatePhone?: string;
}

export interface Government extends BaseEntity {
  entityType: "ADMINISTRATION";
  institutionName: string;
  institutionType?: string;
  foundingDate?: string;
  jurisdictionLevel?: string;
  contactPerson?: string;
  jobTitle?: string;
}

export interface LargeAccount extends BaseEntity {
  entityType: "SOCIETE";
  corporateName: string;
  corporateGroup?: string;
  yearEstablished?: string;
  numberOfEmployees?: string;
  industry?: string;
  primaryContactPerson?: string;
  jobTitle?: string;
  alternateContact?: string;
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

export type ThirdParty = (Company | Individual | Government | LargeAccount) & {
  identificationFiscal: IdentificationFiscal;
  bankingDetails: BankingDetails[];
};

export type ThirdPartySubmission = {
  entityType: EntityType;
  bankingDetails: BankingDetails[];
} & Partial<CompanyInfo & IndividualInfo & AdministrationInfo>;
