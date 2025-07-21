import type React from "react";
import { ArrowLeft, Mail, Phone, MapPin, Eye, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

export const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-neutral-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-secondary">
              Politique de Confidentialité
            </h1>
          </div>
          <p className="text-text">Dernière mise à jour : Janvier 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              1. Préambule
            </h2>
            <p className="text-text leading-relaxed">
              La présente politique vise à informer les utilisateurs des
              plateformes et services de Go Freelance sur la nature des données
              collectées, leur usage, et les modalités de traitement appliquées.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              2. Responsable de traitement
            </h2>
            <p className="text-text leading-relaxed">
              Le responsable de traitement est Go Freelance SARLU, dont le siège
              est situé à Kinshasa, République Démocratique du Congo. La
              direction générale est responsable de la conformité des
              traitements de données.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              3. Collecte et usage des données
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  Les données sont collectées via :
                </h3>
                <ul className="list-disc list-inside space-y-2 text-text">
                  <li>Formulaires de contact</li>
                  <li>
                    Inscription à nos services (Streameex, MyTaskSpace, etc.)
                  </li>
                  <li>Navigation sur nos plateformes</li>
                  <li>Échanges commerciaux (email, téléphone, réunions)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  Elles sont utilisées pour :
                </h3>
                <ul className="list-disc list-inside space-y-2 text-text">
                  <li>Fournir nos services</li>
                  <li>Communiquer avec les utilisateurs</li>
                  <li>Améliorer la performance et l'expérience utilisateur</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
              <Cookie className="w-6 h-6" />
              4. Cookies et traceurs
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-text leading-relaxed">
                Nos sites utilisent des cookies pour améliorer les performances,
                mesurer l'audience et proposer des contenus adaptés. Vous pouvez
                configurer vos préférences depuis votre navigateur.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              5. Partage des données à l'international
            </h2>
            <p className="text-text leading-relaxed">
              Certains de nos outils peuvent impliquer des transferts hors RDC
              (ex. : serveurs hébergés à l'étranger). Nous nous assurons que des
              garanties équivalentes à la législation nationale sont appliquées.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              6. Mise à jour de la politique
            </h2>
            <p className="text-text leading-relaxed">
              Cette politique peut être modifiée à tout moment. Toute
              modification substantielle sera signalée sur nos plateformes. La
              dernière version prévaut sur toutes les versions antérieures.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              7. Contact
            </h2>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="text-text leading-relaxed">
                Pour toute question relative à cette politique ou au traitement
                de vos données, vous pouvez contacter notre Délégué à la
                Protection des Données à l'adresse suivante :{" "}
                <a
                  href="mailto:contact@gofreelancerdc.com"
                  className="text-primary hover:underline font-medium"
                >
                  contact@gofreelancerdc.com
                </a>
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Documents connexes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/politique-protection-donnees"
                className="block p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition"
              >
                <h3 className="font-semibold text-secondary mb-2">
                  Politique de Protection des Données
                </h3>
                <p className="text-sm text-text">
                  Détails sur la collecte et le traitement de vos données
                </p>
              </Link>
              <Link
                to="/cgu"
                className="block p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition"
              >
                <h3 className="font-semibold text-secondary mb-2">
                  Conditions Générales d'Utilisation
                </h3>
                <p className="text-sm text-text">
                  Règles d'utilisation de nos plateformes
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary mb-6">
            Nous contacter
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:contact@gofreelancerdc.com"
                  className="text-primary hover:underline"
                >
                  contact@gofreelancerdc.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Téléphone</p>
                <a
                  href="tel:+243990776509"
                  className="text-primary hover:underline"
                >
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
  );
};
