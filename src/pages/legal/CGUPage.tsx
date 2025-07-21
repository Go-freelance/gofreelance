import type React from "react"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export const CGUPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-neutral-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition mb-6">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl font-bold text-secondary mb-4">Conditions Générales d'Utilisation (CGU)</h1>
          <p className="text-text">Dernière mise à jour : Janvier 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg ">
          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Objet</h2>
            <p className="text-text leading-relaxed">
              Les présentes CGU régissent l'accès et l'utilisation des sites internet, applications mobiles et
              plateformes numériques exploitées ou éditées par Go Freelance SARLU et ses marques affiliées (Streameex,
              MyTaskSpace, Inteficiel, etc.).
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Acceptation</h2>
            <p className="text-text leading-relaxed">
              En accédant aux services, l'utilisateur reconnaît avoir pris connaissance des présentes CGU et les
              accepter intégralement. En cas de désaccord, l'accès aux services doit être immédiatement interrompu.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Accès aux services</h2>
            <p className="text-text leading-relaxed">
              L'accès aux services est généralement libre, mais certaines fonctionnalités peuvent nécessiter une
              inscription ou l'acceptation de conditions particulières. Go Freelance se réserve le droit de modifier,
              suspendre ou supprimer à tout moment l'accès aux plateformes.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Obligations de l'utilisateur</h2>
            <p className="text-text leading-relaxed mb-4">L'utilisateur s'engage à :</p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Utiliser les services conformément aux lois en vigueur</li>
              <li>Ne pas publier de contenu illicite, diffamatoire, haineux ou offensant</li>
              <li>
                Ne pas détourner les fonctionnalités des plateformes à des fins frauduleuses ou commerciales non
                autorisées
              </li>
              <li>Respecter les droits de propriété intellectuelle</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Données personnelles</h2>
            <p className="text-text leading-relaxed">
              L'utilisateur est informé que l'utilisation des services implique la collecte et le traitement de données
              personnelles, conformément à la{" "}
              <Link to="/legal/politique-confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </Link>{" "}
              de Go Freelance.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">6. Compte utilisateur</h2>
            <p className="text-text leading-relaxed">
              Certaines plateformes nécessitent la création d'un compte. L'utilisateur s'engage à fournir des
              informations exactes, à maintenir la confidentialité de ses identifiants, et à signaler toute utilisation
              frauduleuse de son compte.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">7. Suspension ou suppression de compte</h2>
            <p className="text-text leading-relaxed">
              Go Freelance se réserve le droit de suspendre ou de supprimer tout compte en cas de violation des CGU,
              sans préavis ni indemnité.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">8. Responsabilité</h2>
            <p className="text-text leading-relaxed">
              Go Freelance ne pourra être tenu responsable en cas de dommage résultant de l'utilisation du site, d'un
              dysfonctionnement, d'une perte de données ou d'un piratage indépendant de sa volonté.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary mb-6">Nous contacter</h2>
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
