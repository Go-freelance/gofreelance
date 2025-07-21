import type React from "react"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export const CGVPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-neutral-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition mb-6">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl font-bold text-secondary mb-4">Conditions Générales de Vente (CGV)</h1>
          <p className="text-text">Dernière mise à jour : Janvier 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg ">
          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Présentation de l'entreprise</h2>
            <p className="text-text leading-relaxed mb-4">
              Go Freelance SARLU est une agence spécialisée dans le conseil en marketing, communication digitale et le
              développement de solutions numériques. Nos services incluent notamment les marques Streameex, MyTaskSpace,
              Inteficiel, MBS, ainsi que d'autres plateformes numériques.
            </p>
            <p className="text-text leading-relaxed">
              L'ensemble de nos prestations est destiné à accompagner les entreprises, institutions et particuliers dans
              leur transformation digitale, leur stratégie marketing et leur communication.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Objet des CGV</h2>
            <p className="text-text leading-relaxed">
              Les présentes Conditions Générales de Vente ont pour objet de définir les modalités contractuelles selon
              lesquelles Go Freelance fournit ses services à ses clients. Elles s'appliquent à toutes les ventes de
              prestations conclues par la société, directement ou par le biais de ses marques ou entités affiliées.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Acceptation des conditions</h2>
            <p className="text-text leading-relaxed">
              Toute commande de service auprès de Go Freelance implique l'adhésion entière, irrévocable et sans réserve
              du client aux présentes CGV. Celles-ci prévalent sur tout autre document, sauf conditions particulières
              expresses et écrites signées des deux parties.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Nature des prestations</h2>
            <p className="text-text leading-relaxed mb-4">Go Freelance propose notamment :</p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4">
              <li>Conseil stratégique en marketing digital</li>
              <li>Community management, gestion de l'e-réputation</li>
              <li>Création et production de contenus multimédia (vidéo, infographie, rédaction web)</li>
              <li>Développement de solutions web et mobiles</li>
              <li>Mise en place et gestion de plateformes SaaS</li>
              <li>Formations et accompagnement digital</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Devis et commandes</h2>
            <p className="text-text leading-relaxed">
              Les prestations font systématiquement l'objet d'un devis détaillé, précisant la nature de la mission, son
              coût, les modalités de paiement et les délais de livraison. Le devis signé par le client vaut engagement
              contractuel. Toute modification postérieure devra être formalisée par écrit et acceptée par les deux
              parties.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">6. Prix et modalités de règlement</h2>
            <p className="text-text leading-relaxed mb-4">
              Les prix sont indiqués hors taxes, sauf mention contraire. Les règlements peuvent être effectués par
              virement bancaire, mobile money ou tout autre moyen précisé dans le devis.
            </p>
            <p className="text-text leading-relaxed mb-4">
              Un acompte de 40 à 70 % est généralement exigé à la commande, toutefois nous mentionnons les termes de
              paiement sur toutes nos factures et devis. Le solde est exigible à la livraison.
            </p>
            <p className="text-text leading-relaxed">
              Tout retard de paiement entraînera des pénalités de retard équivalentes à 10 % du montant dû par mois de
              retard.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">7. Délais d'exécution</h2>
            <p className="text-text leading-relaxed">
              Les délais sont indiqués à titre estimatif et peuvent varier selon la complexité du projet et la
              réactivité du client. Go Freelance s'engage à respecter les délais indiqués dans la mesure de ses
              capacités et sauf cas de force majeure.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">8. Obligations du client</h2>
            <p className="text-text leading-relaxed">
              Le client s'engage à fournir toutes les informations, documents et validations nécessaires à la bonne
              exécution des prestations. Tout retard ou défaut d'information pourra entraîner un décalage du planning
              initialement convenu.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">9. Propriété intellectuelle</h2>
            <p className="text-text leading-relaxed">
              Tous les livrables, créations graphiques, codes, contenus et autres éléments produits dans le cadre de la
              mission restent la propriété de Go Freelance jusqu'au paiement intégral de la prestation. Après règlement,
              les droits sont transférés au client selon les termes du contrat.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">10. Garantie et responsabilité</h2>
            <p className="text-text leading-relaxed">
              Go Freelance s'engage à fournir ses services avec diligence, conformément aux règles de l'art. La
              responsabilité de Go Freelance est limitée au montant de la prestation facturée. Elle ne saurait être
              engagée pour un dommage indirect ou immatériel.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">11. Résiliation</h2>
            <p className="text-text leading-relaxed">
              En cas de manquement grave de l'une des parties, le contrat pourra être résilié de plein droit après une
              mise en demeure restée infructueuse sous 15 jours. Le client reste redevable des sommes dues pour les
              prestations exécutées.
            </p>
          </div>

          {/* Section 12 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">12. Droit applicable</h2>
            <p className="text-text leading-relaxed">
              Les présentes CGV sont régies par le droit en vigueur en République Démocratique du Congo. En cas de
              litige, les parties s'engagent à rechercher une solution amiable avant tout recours juridictionnel. À
              défaut, le litige sera soumis aux tribunaux compétents de Kinshasa.
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
