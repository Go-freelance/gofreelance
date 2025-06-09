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

export interface Contact {
  civilite: string;
  nomComplet: string;
  fonction: string;
  phone1: string;
  phone2?: string;
  email: string;
}

export interface ThirdPartySubmission {
  entityType: "SOCIETE" | "PARTICULIER" | "ADMINISTRATION";
  // Champs communs
  telephone: string;
  email: string;

  // Champs spécifiques à la société
  denominationSociale?: string;
  numeroRCCM?: string;
  formeJuridique?: string;
  autreFormeJuridique?: string;
  numeroIDNAT?: string;
  numeroNIF?: string;
  siegeSocial?: string;
  activitePrincipale?: string;
  capitalSocial?: string;
  responsables?: Contact[];

  // Champs spécifiques au particulier
  nom?: string;
  prenoms?: string;
  dateNaissance?: string;
  lieuNaissance?: string;
  nationalite?: string;
  typeDocument?: string;
  numeroDocument?: string;
  dateExpiration?: string;
  adresse?: string;
  profession?: string;
  employeur?: string;

  // Champs spécifiques à l'administration
  nomOfficiel?: string;
  categorieAdministrative?: string;
  adresseInstitutionnelle?: string;
  personneContact?: string;
  fonctionContact?: string;
  telephoneContact?: string;
  emailContact?: string;
  numeroIFU?: string;
  compteBancaire?: string;
  referenceInterne?: string;
  acteDeclencheur?: string;
  cadreJuridique?: string;

  // Informations bancaires (optionnelles pour tous les types)
  bankingDetails?: BankingDetails[];
}
