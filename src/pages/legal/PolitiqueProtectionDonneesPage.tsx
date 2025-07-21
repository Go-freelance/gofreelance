import type React from "react"
import { ArrowLeft, Mail, Phone, MapPin, Shield } from "lucide-react"
import { Link } from "react-router-dom"

export const PolitiqueProtectionDonneesPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-neutral-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition mb-6">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-secondary">Politique de Protection des Données</h1>
          </div>
          <p className="text-text">Dernière mise à jour : Janvier 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Engagement de confidentialité</h2>
            <p className="text-text leading-relaxed">
              Go Freelance SARLU attache une grande importance à la confidentialité et à la sécurité des données
              personnelles collectées. Nous nous engageons à respecter la réglementation en vigueur en matière de
              protection des données, notamment les principes de la Loi sur la protection des données personnelles en
              RDC.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Données collectées</h2>
            <p className="text-text leading-relaxed mb-4">
              Nous pouvons collecter différentes catégories de données, notamment :
            </p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>
                <strong>Données d'identité :</strong> nom, prénom, email, numéro de téléphone
              </li>
              <li>
                <strong>Données professionnelles :</strong> nom de l'entreprise, fonction, secteur d'activité
              </li>
              <li>
                <strong>Données techniques :</strong> adresse IP, type de navigateur, temps de connexion
              </li>
              <li>
                <strong>Données issues de formulaires :</strong> inscriptions, communications
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Finalités du traitement</h2>
            <p className="text-text leading-relaxed mb-4">Les données collectées servent à :</p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Gérer la relation client et fournir nos services</li>
              <li>Envoyer des communications marketing ou d'informations liées à nos produits</li>
              <li>Personnaliser l'expérience utilisateur</li>
              <li>Réaliser des analyses statistiques</li>
              <li>Assurer la sécurité et la maintenance technique des plateformes</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Destinataires des données</h2>
            <p className="text-text leading-relaxed mb-4">Les données peuvent être transmises à :</p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Nos équipes internes et partenaires contractuels</li>
              <li>Nos sous-traitants techniques (hébergeurs, maintenance)</li>
              <li>Les entités affiliées à Go Freelance</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Sécurité des données</h2>
            <p className="text-text leading-relaxed">
              Nous appliquons des mesures techniques (chiffrement, pare-feux, audits réguliers) et organisationnelles
              (accès restreint, politique interne) pour garantir la sécurité des données.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">6. Conservation des données</h2>
            <p className="text-text leading-relaxed">
              Les données sont conservées pendant la durée nécessaire à la finalité pour laquelle elles ont été
              collectées, puis archivées ou supprimées. Cette durée peut être prolongée en cas d'obligation légale ou
              litige.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">7. Vos droits</h2>
            <p className="text-text leading-relaxed mb-4">
              Conformément à la législation applicable, vous disposez de droits sur vos données :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-text">
                  <li>Droit d'accès</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit d'opposition</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-text">
                  <li>Droit à la portabilité</li>
                  <li>Droit de retirer votre consentement</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-text">
                <strong>Exercer vos droits :</strong> Vous pouvez exercer vos droits en nous écrivant à l'adresse :{" "}
                <a href="mailto:contact@gofreelancerdc.com" className="text-primary hover:underline font-medium">
                  contact@gofreelancerdc.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary mb-6">Délégué à la Protection des Données</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:contact@gofreelancerdc.com" className="text-primary hover:underline">
                  contact@gofreelancerdc.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Téléphone</p>
                <a href="tel:+243990776509" className="text-primary hover:underline">
                  +243 990 776 509
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Adresse</p>
                <p className="text-text">RDC, Kinshasa/Gombe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
