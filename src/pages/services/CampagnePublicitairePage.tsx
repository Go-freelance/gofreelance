import { useState } from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Target,
  BarChart3,
  TrendingUp,
  Globe,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function CampagnePublicitairePage() {
  const { openAppointmentForm } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleOpenAppointment = () => {
    openAppointmentForm("Campagne Publicitaire");
  };

  const processSteps = [
    {
      step: "01",
      title: "Audit & Stratégie",
      description:
        "Analyse de votre marché cible et définition des objectifs de campagne (trafic, leads, ventes).",
    },
    {
      step: "02",
      title: "Création des Ads",
      description:
        "Conception de visuels percutants et rédaction de textes (copywriting) orientés conversion.",
    },
    {
      step: "03",
      title: "Lancement & Ciblage",
      description:
        "Paramétrage précis des audiences et lancement des campagnes sur les canaux sélectionnés.",
    },
    {
      step: "04",
      title: "Optimisation & Scale",
      description:
        "Suivi quotidien, A/B testing et augmentation progressive du budget sur les ads gagnantes.",
    },
  ];

  const platforms = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Google Ads",
      description:
        "Captez l'intention d'achat immédiate via le réseau de recherche (Search) et Display.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Ads",
      description:
        "Facebook, Instagram, LinkedIn, TikTok : ciblez vos prospects selon leurs intérêts et comportements.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Retargeting",
      description:
        "Ciblez les visiteurs qui ont déjà interagi avec votre marque pour maximiser les conversions.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Tracking Avancé",
      description:
        "Installation du Pixel/API de conversion pour suivre chaque euro investi et calculer votre ROAS.",
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Copywriting",
      description:
        "Des messages publicitaires persuasifs qui incitent au clic et à l'action.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Reporting Live",
      description:
        "Accès à un dashboard personnalisé pour suivre vos performances en temps réel.",
    },
  ];

  const faqs = [
    {
      question: "Quel budget faut-il pour démarrer ?",
      answer:
        "Tout dépend de votre secteur et de la plateforme. Nous recommandons généralement un budget test minimum de 1000$/mois (hors frais de gestion) pour obtenir des résultats significatifs et optimiser les algorithmes.",
    },
    {
      question: "Quelle plateforme choisir : Google ou Facebook ?",
      answer:
        "Cela dépend de votre objectif. Google Ads est idéal pour répondre à un besoin immédiat (recherche active), tandis que Facebook/Instagram Ads est puissant pour générer de la demande (découverte). Souvent, une stratégie hybride est la meilleure.",
    },
    {
      question: "En combien de temps obtient-on des résultats ?",
      answer:
        "Contrairement au SEO, la publicité offre une visibilité immédiate. Les premiers leads peuvent arriver dès le lancement, mais la phase d'optimisation (2-4 semaines) est cruciale pour atteindre la rentabilité maximale.",
    },
    {
      question: "Comment mesurez-vous le succès ?",
      answer:
        "Nous nous basons sur le ROAS (Retour sur les Dépenses Publicitaires) et le CPA (Coût par Acquisition). Notre objectif est que chaque dollars investi vous rapporte plus que ce qu'il vous coûte.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/campagne-publicitaire.png"
            alt="Campagne Publicitaire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Campagne <span className="text-primary">Publicitaire</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Propulsez votre marque devant votre audience idéale. Des
              stratégies d'acquisition payante (Ads) conçues pour un retour sur
              investissement maximal.
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
                <div className="text-xl sm:text-3xl font-bold text-primary mb-1">x5</div>
                <div className="text-sm text-gray-300">ROAS Cible</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-primary mb-1">
                  Ciblé
                </div>
                <div className="text-sm text-gray-300">Audience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-primary mb-1">
                  Immédiat
                </div>
                <div className="text-sm text-gray-300">Résultats</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Canaux d'Acquisition
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Soyez visible là où {""}
              <span className="block text-primary">ça compte</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche multi-canal pour toucher vos prospects à chaque étape
              de leur parcours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {platform.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {platform.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {platform.description}
                </p>
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
              <span className="text-sm font-semibold text-primary">
                Notre Méthodologie
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              De l'investissement au {""}
              <span className="block text-primary">profit</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl border border-gray-100 h-full">
                  <div className="text-4xl sm:text-5xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                Accélérez votre <span className="text-primary">croissance</span>
              </h2>
              <p className="text-white/80 text-lg sm:text-xl mb-8">
                La publicité digitale est le levier le plus rapide pour acquérir
                de nouveaux clients. Ne laissez pas vos concurrents prendre
                toute la place.
              </p>
              <ul className="space-y-4">
                {[
                  "Acquisition de clients rapide",
                  "Contrôle total du budget",
                  "Ciblage ultra-précis",
                  "Mesure précise du ROI",
                  "Vidéo, Image, Texte : formats variés",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg sm:text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white transform rotate-3 rounded-2xl"></div>
              <img
                src="/images/campagne-publicitaire.png"
                alt="Marketing Analytics"
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
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Prêt à exploser votre chiffre d'affaires ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour définir la stratégie d'acquisition qui fera
            décoller votre business.
          </p>
          <button
            onClick={handleOpenAppointment}
            className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Discuter de mes objectifs
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
