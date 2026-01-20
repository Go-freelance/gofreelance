import { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  CheckCircle2,
  ArrowRight,
  Share2,
  MessageSquare,
  BarChart3,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function CampagneCrossCanalPage() {
  const { openAppointmentForm } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleOpenAppointment = () => {
    openAppointmentForm("Campagne Cross Canal");
  };

  const processSteps = [
    {
      step: "01",
      title: "Stratégie omnicanale",
      description:
        "Définition précise de votre stratégie cross-canal pour une cohérence totale.",
    },
    {
      step: "02",
      title: "Création de contenu",
      description:
        "Production de contenus créatifs et impactants déclinés pour chaque canal.",
    },
    {
      step: "03",
      title: "Déploiement",
      description:
        "Lancement coordonné et synchronisé de vos campagnes sur tous les supports.",
    },
    {
      step: "04",
      title: "Optimisation continue",
      description:
        "Suivi des KPIs, A/B testing et ajustements pour maximiser le ROI.",
    },
  ];

  const channels = [
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Media",
      description:
        "Présence stratégique sur Facebook, Instagram, LinkedIn, TikTok pour engager votre communauté.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Email & SMS Marketing",
      description:
        "Séquences personnalisées pour nourrir la relation et convertir vos prospects.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Publicité Digitale",
      description:
        "Campagnes Google Ads, Social Ads et Display pour toucher votre cible idéale.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Marketing de Contenu",
      description:
        "Articles, vidéos et infographies pour asseoir votre autorité et attirer du trafic organique.",
    },
  ];

  const faqs = [
    {
      question: "Pourquoi faire une campagne cross-canal ?",
      answer:
        "Les consommateurs utilisent aujourd'hui de multiples canaux avant d'acheter. Être présent partout de manière cohérente augmente vos chances de conversion de plus de 250%.",
    },
    {
      question: "Comment assurez-vous la cohérence du message ?",
      answer:
        "Nous développons une charte éditoriale et graphique unique qui est ensuite déclinée spécifiquement pour les codes de chaque plateforme.",
    },
    {
      question: "Quel budget prévoir pour une campagne efficace ?",
      answer:
        "Le budget dépend de vos objectifs et de la durée. Nous proposons des stratégies adaptées à partir de quelques milliers de dollars jusqu'aux campagnes d'envergure nationale.",
    },
    {
      question: "Fournissez-vous des rapports détaillés ?",
      answer:
        "Absolument. Vous recevez un reporting complet intégrant les données de tous les canaux pour une vision unifiée de la performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/crosscanal.jpg"
            alt="Campagne Cross Canal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Campagne <span className="text-primary">Cross Canal</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Maximisez votre impact avec une stratégie marketing intégrée. Une
              expérience client fluide et cohérente sur tous les points de
              contact.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={handleOpenAppointment}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Lancer ma campagne
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid justify-items-start grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">x3</div>
                <div className="text-sm text-gray-300">Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">360°</div>
                <div className="text-sm text-gray-300">Visibilité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">+40%</div>
                <div className="text-sm text-gray-300">Rétention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Share2 className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase font-semibold text-primary">
                Canaux Intégrés
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Soyez présent là où sont {""}
              <span className="block text-primary">vos clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une présence omnicanale maîtrisée pour ne manquer aucune
              opportunité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group flex gap-6"
              >
                <div className="shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {channel.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase font-semibold text-primary">
                Notre Méthodologie
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Une exécution {""}
              <span className="block text-primary">millimétrée</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl border border-gray-100 h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List Section (Dark Mode) */}
      <section className="py-20 px-4 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Maximisez votre <span className="text-primary">impact</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Une stratégie cross-canal bien orchestrée ne se contente pas
                d'ajouter des canaux, elle multiplie les résultats par la
                synergie.
              </p>
              <ul className="space-y-4">
                {[
                  "Amélioration de l'expérience client",
                  "Augmentation du taux de conversion",
                  "Fidélisation accrue",
                  "Meilleure connaissance client",
                  "Optimisation du budget marketing",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 transform rotate-3 rounded-2xl"></div>
              <img
                src="/images/crosscanal.jpg"
                alt="Marketing Digital"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Questions
              <span className="block text-primary">fréquentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-secondary text-lg pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-text leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Prêt à unifier votre communication ?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour élaborer une stratégie cross-canal performante
            et sur-mesure.
          </p>
          <button
            onClick={handleOpenAppointment}
            className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Discuter de mon projet
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
