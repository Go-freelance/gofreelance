export type EntityType = "SOCIETE" | "PARTICULIER" | "ADMINISTRATION";

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

export interface BankingDetails {
  bankName: string;
  branchName?: string;
  accountHolderName: string;
  accountCurrency: string;
  accountNumber: string;
  swiftBicCode?: string;
  iban?: string;
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
  dirigeants: string;
  dateCreation: string;
  telephone: string;
  email: string;
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

export type ThirdPartySubmission = {
  entityType: EntityType;
  bankingDetails: BankingDetails[];
} & Partial<CompanyInfo & IndividualInfo & AdministrationInfo>;
