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
          <h1 className="text-3xl font-bold text-secondary mb-4">CONDITIONS GÉNÉRALES DE VENTE (CGV)</h1>
          <p className="text-text">Dernière mise à jour : 20 Novembre 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg ">
          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Présentation de l'entreprise</h2>
            <p className="text-text leading-relaxed mb-4">
              Go freelance SARLU est une agence spécialisée dans le conseil en marketing, communication digitale et le développement de solutions numériques. Nos services incluent notamment les marques Streameex™, MyTaskSpace™, Inteficiel™, Modern Business School™ (MBS), Gameex™ ainsi que d'autres plateformes numériques. L'ensemble de nos prestations est destiné à accompagner les entreprises, institutions et particuliers dans leur transformation digitale, leur stratégie marketing et leur communication.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Objet des CGV</h2>
            <p className="text-text leading-relaxed">
              Les présentes Conditions Générales de Vente ont pour objet de définir les modalités contractuelles selon lesquelles Go Freelance fournit ses services à ses clients. Elles s'appliquent à toutes les ventes de prestations conclues par la société, directement ou par le biais de ses marques ou entités affiliées.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Acceptation des conditions</h2>
            <p className="text-text leading-relaxed">
              Toute commande de service auprès de Go freelance implique l'adhésion entière, irrévocable et sans réserve du client aux présentes CGV. Celles-ci prévalent sur tout autre document, sauf conditions particulières expresses et écrites signées des deux parties.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Nature des prestations</h2>
            <p className="text-text leading-relaxed mb-4">Go freelance propose notamment :</p>
            <ul className="list-disc list-inside space-y-2 text-text ml-4 mb-4">
              <li>Conseil stratégique en marketing et communication</li>
              <li>Community management, gestion de l'e-réputation</li>
              <li>Création et production de contenus multimédia (vidéo, infographie, rédaction web)</li>
              <li>Développement de solutions web et mobiles</li>
              <li>Mise en place et gestion de plateformes SaaS</li>
              <li>Formations et accompagnement digital</li>
            </ul>
            <p className="text-text leading-relaxed mb-2 font-semibold">Services spécifiques liés aux marques :</p>
            <p className="text-text leading-relaxed">
              <strong>Streameex™</strong> (plateforme de streaming, production audiovisuelle, évènementiel digital) | Captation vidéo et streaming en direct ; Location et installation de matériel audiovisuel ; Production et postproduction vidéo & photo ; Location des écrans Led, location de matériel de sonorisation, Location Lumière, Gestion technique d'évènements digitaux ou hybrides, billetterie en ligne & physique.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Devis, Proforma, Factures et Commandes</h2>
            <p className="text-text leading-relaxed mb-4">
              Toute prestation fait l’objet d’un devis, d’une proforma facture ou d’un bon de commande, transmis au client par email ou en version imprimée. Ces documents précisent la nature de la mission, le coût, les modalités de paiement, ainsi que les délais de réalisation.
            </p>
            <p className="text-text leading-relaxed mb-4">
              L’envoi de ces documents, qu’ils soient signés ou non, et le début de toute prestation par Go Freelance SARLU impliquent automatiquement l’acceptation pleine et entière de leurs termes par le client.
            </p>
            <p className="text-text leading-relaxed">
              Toute modification ultérieure des conditions initiales devra être formalisée par écrit (email, avenant ou tout autre support) et acceptée par les deux parties.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">6. Prix et modalités de règlement</h2>
            <p className="text-text leading-relaxed mb-4">
              Les prix indiqués dans nos plaquettes commerciales ou grille tarifaires sont exprimés hors taxes, sauf mention contraire.
            </p>
            <p className="text-text leading-relaxed mb-4">
              En tant qu’entité assujettie à la TVA, Go Freelance SARLU est tenue de collecter la TVA auprès du client pour le compte de l’État conformément à l’Ordonnance-Loi n° 10/001 du 20 août 2010 portant institution de la TVA telle que modifiée par l’Ordonnance-Loi n° 001/2012 du 21 septembre 2012, et aux dispositions du Code général des impôts de la RDC (mise à jour 2023), Go Freelance SARLU collecte la TVA au taux légal en vigueur de 16%.
            </p>
            <p className="text-text leading-relaxed mb-4">
              Si le client prétend être exonéré de TVA (ou bénéficier d’un régime particulier), il doit fournir avant le démarrage des prestations un document officiel attestant cette exonération (par exemple un avis fiscal, un certificat d’exonération, ou autre document légal reconnu par la Direction Générale des Impôts).
            </p>
            <p className="text-text leading-relaxed mb-4">
              À défaut de présentation d’un tel document, le client sera considéré comme redevable de la TVA au taux normal, et toute TVA due sera facturée et supportée par le client.
            </p>
            <p className="text-text leading-relaxed">
              Les règlements peuvent être effectués par virement bancaire, mobile money ou tout autre moyen précisé dans le devis. La totalité ou un acompte de 40 à 70 % est généralement exigé à la commande toutes fois nous mentionnons les termes de paiement sur toutes nos factures, devis, proforma et bon de commande. Le solde est exigible à la livraison. Tout retard de paiement entraînera des pénalités de retard équivalentes à 10% du montant dû par semaine de retard.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">7. Délais d'exécution</h2>
            <p className="text-text leading-relaxed">
              Les délais sont indiqués à titre estimatif et peuvent varier selon la complexité du projet et la réactivité du client. Go freelance s'engage à respecter les délais indiqués dans la mesure de ses capacités et sauf cas de force majeure.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">8. Obligations du client</h2>
            <p className="text-text leading-relaxed">
              Le client s'engage à fournir toutes les informations, documents et validations nécessaires à la bonne exécution des prestations. Tout retard ou défaut d'information pourra entraîner un décalage du planning initialement convenu.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">9. Propriété intellectuelle</h2>
            <p className="text-text leading-relaxed">
              Tous les livrables, créations graphiques, codes, contenus et autres éléments produits dans le cadre de la mission restent la propriété de Go freelance jusqu'au paiement intégral de la prestation. Après règlement, les droits sont transférés au client selon les termes du contrat.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">10. Garantie et responsabilité</h2>
            <p className="text-text leading-relaxed mb-4">
              Go freelance s'engage à fournir ses services avec diligence, conformément aux règles de l'art. La responsabilité de Go freelance est limitée au montant de la prestation facturée. Elle ne saurait être engagée pour un dommage indirect ou immatériel.
            </p>
            <p className="text-text leading-relaxed">
              <strong>Streameex™ :</strong> En cas de casse, perte, vol ou dégradation du matériel fourni, les frais de réparation ou de remplacement sont entièrement à la charge du client.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">11. Résiliation</h2>
            <p className="text-text leading-relaxed">
              En cas de manquement grave de l'une des parties, le contrat pourra être résilié de plein droit après une mise en demeure restée infructueuse sous 15 jours. Le client reste redevable des sommes dues pour les prestations exécutées.
            </p>
          </div>

          {/* Section 12 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">12. Remboursement</h2>
            <p className="text-text leading-relaxed">
              Toute demande de remboursement pour un service ne peut être acceptée que pour des motifs valables et dans un délai de 7 jours suivant le paiement.
            </p>
          </div>

          {/* Section 13 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">13. Droit applicable</h2>
            <p className="text-text leading-relaxed">
              Les présentes CGV sont régies par le droit en vigueur en République Démocratique du Congo. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours juridictionnel. À défaut, le litige sera soumis aux tribunaux compétents de Kinshasa.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200 text-center text-text/60 italic">
            Modifié à Kinshasa le 20 novembre 2025
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
