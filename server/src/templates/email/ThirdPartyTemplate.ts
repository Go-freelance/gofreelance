import {
  ThirdPartySubmission,
  Contact,
  BankingDetails,
} from "../../types/thirdParty";

export class ThirdPartyTemplate {
  private static getEntitySpecificInfo(
    thirdParty: ThirdPartySubmission
  ): string {
    switch (thirdParty.entityType) {
      case "SOCIETE":
        return `
          <tr>
            <td style="padding: 8px; width: 150px;"><strong>Dénomination sociale:</strong></td>
            <td style="padding: 8px;">${thirdParty.denominationSociale}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Numéro RCCM:</strong></td>
            <td style="padding: 8px;">${thirdParty.numeroRCCM}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Forme juridique:</strong></td>
            <td style="padding: 8px;">${
              thirdParty.formeJuridique === "Autre" &&
              thirdParty.autreFormeJuridique
                ? thirdParty.autreFormeJuridique
                : thirdParty.formeJuridique
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Numéro IDNAT:</strong></td>
            <td style="padding: 8px;">${thirdParty.numeroIDNAT}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Numéro NIF:</strong></td>
            <td style="padding: 8px;">${thirdParty.numeroNIF}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Siège social:</strong></td>
            <td style="padding: 8px;">${thirdParty.siegeSocial}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Activité principale:</strong></td>
            <td style="padding: 8px;">${thirdParty.activitePrincipale}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Capital social:</strong></td>
            <td style="padding: 8px;">${thirdParty.capitalSocial}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Téléphone:</strong></td>
            <td style="padding: 8px;">${thirdParty.telephone}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Email:</strong></td>
            <td style="padding: 8px;">${thirdParty.email}</td>
          </tr>
        `;
      case "PARTICULIER":
        return `
          <tr>
            <td style="padding: 8px; width: 150px;"><strong>Nom:</strong></td>
            <td style="padding: 8px;">${thirdParty.nom}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Prénoms:</strong></td>
            <td style="padding: 8px;">${thirdParty.prenoms}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Date de naissance:</strong></td>
            <td style="padding: 8px;">${thirdParty.dateNaissance}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Lieu de naissance:</strong></td>
            <td style="padding: 8px;">${thirdParty.lieuNaissance}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Nationalité:</strong></td>
            <td style="padding: 8px;">${thirdParty.nationalite}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Type de document:</strong></td>
            <td style="padding: 8px;">${thirdParty.typeDocument}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Numéro de document:</strong></td>
            <td style="padding: 8px;">${thirdParty.numeroDocument}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Date d'expiration:</strong></td>
            <td style="padding: 8px;">${thirdParty.dateExpiration}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Profession:</strong></td>
            <td style="padding: 8px;">${thirdParty.profession}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Employeur:</strong></td>
            <td style="padding: 8px;">${thirdParty.employeur}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Adresse:</strong></td>
            <td style="padding: 8px;">${thirdParty.adresse}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Téléphone:</strong></td>
            <td style="padding: 8px;">${thirdParty.telephone}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Email:</strong></td>
            <td style="padding: 8px;">${thirdParty.email}</td>
          </tr>
        `;
      case "ADMINISTRATION":
        return `
          <tr>
            <td style="padding: 8px; width: 150px;"><strong>Nom officiel:</strong></td>
            <td style="padding: 8px;">${thirdParty.nomOfficiel}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Catégorie administrative:</strong></td>
            <td style="padding: 8px;">${thirdParty.categorieAdministrative}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Adresse institutionnelle:</strong></td>
            <td style="padding: 8px;">${thirdParty.adresseInstitutionnelle}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Personne de contact:</strong></td>
            <td style="padding: 8px;">${thirdParty.personneContact}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Fonction du contact:</strong></td>
            <td style="padding: 8px;">${thirdParty.fonctionContact}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Téléphone du contact:</strong></td>
            <td style="padding: 8px;">${thirdParty.telephoneContact}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Email du contact:</strong></td>
            <td style="padding: 8px;">${thirdParty.emailContact}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Numéro IFU:</strong></td>
            <td style="padding: 8px;">${
              thirdParty.numeroIFU || "Non spécifié"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Compte bancaire:</strong></td>
            <td style="padding: 8px;">${thirdParty.compteBancaire}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Référence interne:</strong></td>
            <td style="padding: 8px;">${
              thirdParty.referenceInterne || "Non spécifié"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Acte déclencheur:</strong></td>
            <td style="padding: 8px;">${thirdParty.acteDeclencheur}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Cadre juridique:</strong></td>
            <td style="padding: 8px;">${thirdParty.cadreJuridique}</td>
          </tr>
        `;
    }
  }

  private static getResponsablesSection(
    thirdParty: ThirdPartySubmission
  ): string {
    const responsables = thirdParty.responsables;
    if (
      thirdParty.entityType === "SOCIETE" &&
      responsables &&
      responsables.length > 0
    ) {
      return `
        <div class="section">
          <h2>Responsable(s) de la Société</h2>
          ${responsables
            .map(
              (contact: Contact, index: number) => `
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 5px; border-left: 4px solid #0055a4;">
              <h3 style="color: #0055a4; margin-top: 0;">Contact ${
                index + 1
              }</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; width: 150px;"><strong>Civilité:</strong></td>
                  <td style="padding: 8px;">${contact.civilite}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;"><strong>Nom complet:</strong></td>
                  <td style="padding: 8px;">${contact.nomComplet}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;"><strong>Fonction:</strong></td>
                  <td style="padding: 8px;">${contact.fonction}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;"><strong>Téléphone principal:</strong></td>
                  <td style="padding: 8px;">${contact.phone1}</td>
                </tr>
                ${
                  contact.phone2
                    ? `
                <tr>
                  <td style="padding: 8px;"><strong>Téléphone secondaire:</strong></td>
                  <td style="padding: 8px;">${contact.phone2}</td>
                </tr>
                `
                    : ""
                }
                <tr>
                  <td style="padding: 8px;"><strong>Email:</strong></td>
                  <td style="padding: 8px;">${contact.email}</td>
                </tr>
              </table>
            </div>
          `
            )
            .join("")}
        </div>
      `;
    }
    return "";
  }

  private static getBankingDetailsSection(
    thirdParty: ThirdPartySubmission
  ): string {
    const bankingDetails = thirdParty.bankingDetails;
    if (bankingDetails && bankingDetails.length > 0) {
      return `
        <div class="section">
          <h2>Informations bancaires</h2>
          ${bankingDetails
            .map(
              (account: BankingDetails, index: number) => `
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 5px; border-left: 4px solid #0055a4;">
              <h3 style="color: #0055a4; margin-top: 0;">Compte ${
                index + 1
              }</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; width: 150px;"><strong>Nom de la banque:</strong></td>
                  <td style="padding: 8px;">${account.bankName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;"><strong>Nom du titulaire:</strong></td>
                  <td style="padding: 8px;">${account.accountHolderName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;"><strong>Numéro de compte:</strong></td>
                  <td style="padding: 8px;">${account.accountNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;"><strong>Devise:</strong></td>
                  <td style="padding: 8px;">${account.accountCurrency}</td>
                </tr>
              </table>
            </div>
          `
            )
            .join("")}
        </div>
      `;
    }
    return "";
  }

  public static generate(thirdParty: ThirdPartySubmission): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #0055a4; border-bottom: 2px solid #0055a4; padding-bottom: 10px; }
          h2 { color: #0055a4; font-size: 20px; margin-top: 30px; }
          .section { background-color: #ffffff; padding: 20px; border-radius: 5px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          table { width: 100%; border-collapse: collapse; }
          td { padding: 8px; }
          .footer { margin-top: 30px; font-size: 14px; color: #777; border-top: 1px solid #eee; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Nouveau tiers créé</h1>
          <p>Un nouveau tiers de type <strong>${
            thirdParty.entityType
          }</strong> a été créé.</p>

          <div class="section">
            <h2>Informations générales</h2>
            <table>
              ${this.getEntitySpecificInfo(thirdParty)}
            </table>
          </div>

          ${this.getResponsablesSection(thirdParty)}
          ${this.getBankingDetailsSection(thirdParty)}

          <div class="footer">
            <p>© ${new Date().getFullYear()} Go Freelance. Tous droits réservés.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}
