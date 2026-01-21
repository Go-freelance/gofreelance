import {
  Megaphone,
  Target,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";
import { useState } from "react";

export default function BrandingPRPage() {
  const {openAppointmentForm} = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleOpenAppointmentForm = () => {
    openAppointmentForm("Branding, PR & E-réputation");
  };
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Stratégie de Marque",
      description:
        "Définition d'une stratégie de marque cohérente et différenciante pour vous positionner efficacement sur votre marché.",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Positionnement de la Marque",
      description:
        "Analyse concurrentielle et positionnement unique pour vous démarquer et créer une valeur perçue forte.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Création de la Personnalité",
      description:
        "Développement d'une personnalité de marque authentique qui résonne avec votre audience cible.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Développement de la Notoriété",
      description:
        "Stratégies d'amplification pour accroître votre visibilité et votre reconnaissance sur le marché.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Communication Corporate & RSE",
      description:
        "Communication institutionnelle et responsabilité sociétale pour renforcer votre image de marque.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Gestion de l'E-réputation",
      description:
        "Surveillance et gestion proactive de votre réputation en ligne sur tous les canaux digitaux.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Analyse",
      description:
        "Analyse approfondie de votre marque, de votre positionnement actuel et de votre réputation en ligne.",
    },
    {
      step: "02",
      title: "Stratégie & Positionnement",
      description:
        "Définition de votre stratégie de marque, positionnement unique et personnalité de marque.",
    },
    {
      step: "03",
      title: "Déploiement & Activation",
      description:
        "Mise en œuvre de la stratégie avec création de contenu, relations presse et campagnes d'influence.",
    },
    {
      step: "04",
      title: "Monitoring & Optimisation",
      description:
        "Surveillance continue de votre e-réputation et optimisation de votre stratégie de communication.",
    },
  ];

  // const portfolio = [
  //   {
  //     title: "Repositionnement Marque Tech",
  //     category: "Stratégie de Marque",
  //     image: "/tech-brand-repositioning.jpg",
  //     results: "+150% notoriété, +85% engagement",
  //   },
  //   {
  //     title: "Campagne RSE Entreprise",
  //     category: "Communication Corporate",
  //     image: "/corporate-csr-campaign.jpg",
  //     results: "+200% mentions positives, +120% confiance",
  //   },
  //   {
  //     title: "Gestion Crise E-réputation",
  //     category: "E-réputation",
  //     image: "/reputation-crisis-management.jpg",
  //     results: "Sentiment positif restauré en 3 mois",
  //   },
  // ];

  const faqs = [
    {
      question: "Quelle est la différence entre branding et e-réputation ?",
      answer:
        "Le branding concerne la construction proactive de votre identité de marque et de votre positionnement, tandis que l'e-réputation se concentre sur la gestion de votre image en ligne et la surveillance des conversations vous concernant sur le web.",
    },
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer:
        "Les premiers résultats en termes de notoriété et d'engagement sont visibles dès 2-3 mois. Pour un repositionnement complet de marque et une amélioration significative de l'e-réputation, comptez 6 à 12 mois.",
    },
    {
      question: "Comment gérez-vous une crise d'e-réputation ?",
      answer:
        "Nous mettons en place un protocole de gestion de crise incluant la surveillance en temps réel, la réponse rapide et appropriée, la création de contenu positif, et la mise en place d'une stratégie de communication pour restaurer votre image.",
    },
    {
      question: "Quels canaux surveillez-vous pour l'e-réputation ?",
      answer:
        "Nous surveillons tous les canaux pertinents : réseaux sociaux, sites d'avis, forums, blogs, médias en ligne, moteurs de recherche, et plateformes spécifiques à votre secteur d'activité.",
    },
    {
      question: "Proposez-vous des services de relations presse ?",
      answer:
        "Oui, nos services incluent les relations presse avec la création de communiqués, l'identification de journalistes cibles, l'organisation d'événements presse, et le suivi des retombées médiatiques.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/brand.jpg"
            alt="Stratégie de marque"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Megaphone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white">
                Identité de Marque & Création Graphique
              </span>
            </div> */}

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Branding, PR & <span className="">E-réputation</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Construisez une marque forte et gérez votre réputation en ligne
              avec nos stratégies de branding, relations publiques et
              e-réputation.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={handleOpenAppointmentForm} className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Démarrer votre projet
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3">
              <div className="">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-gray-300">Satisfaction client</div>
              </div>
              <div className="">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-gray-300">
                  Marques accompagnées
                </div>
              </div>
              <div className="">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  +180%
                </div>
                <div className="text-sm text-gray-300">Notoriété moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Une expertise complète en{" "}
              <span className="block text-primary">
                branding & e-réputation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              De la stratégie de marque à la gestion de votre e - réputation,
              nous vous accompagnons à chaque étape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
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
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Un processus éprouvé en{" "}
              <span className="block text-primary">4 étapes clés</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
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
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Nos réalisations en{" "}
              <span className="block text-primary">
                branding & e-réputation
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary font-semibold">
                    {project.results}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Questions <span className="block text-primary">fréquentes</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Prêt à construire une marque forte et gérer votre réputation ?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et découvrez comment nous pouvons vous
            aider à développer votre notoriété.
          </p>
          <button onClick={handleOpenAppointmentForm} className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
            Planifier un appel
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
