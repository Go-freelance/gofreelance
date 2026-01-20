import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Code,
  Globe,
  Database,
  Shield,
  Zap,
  ChevronDown,
  ChevronUp,
  BarChart3,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function DeveloppementWebMobilePage() {
  const { openAppointmentForm } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleOpenAppointment = () => {
    openAppointmentForm("Développement Web et Mobile");
  };

  const processSteps = [
    {
      step: "01",
      title: "Analyse & Vision",
      description:
        "Compréhension approfondie de vos enjeux business pour définir la solution numérique idéale.",
    },
    {
      step: "02",
      title: "Design de l'Expérience",
      description:
        "Création de parcours utilisateurs intuitifs qui transforment vos visiteurs en clients fidèles.",
    },
    {
      step: "03",
      title: "Construction Itérative",
      description:
        "Développement étape par étape avec des validations régulières pour garantir l'adéquation au besoin.",
    },
    {
      step: "04",
      title: "Lancement & Suivi",
      description:
        "Mise en ligne sécurisée et accompagnement pour assurer la performance durable de votre outil.",
    },
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Plateformes Web",
      description:
        "Des sites et applications web rapides, fluides et conçus pour engager vos utilisateurs instantanément.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobilité Totale",
      description:
        "Accompagnez vos clients partout : des applications mobiles soignées et optimisées pour tous les écrans.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Maximale",
      description:
        "Une vitesse de chargement instantanée pour ne jamais perdre l'attention de vos visiteurs.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Architecture Solide",
      description:
        "Un socle technique robuste capable de grandir avec votre entreprise et de gérer un fort trafic.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité Avancée",
      description:
        "La protection de vos données et de celles de vos clients est intégrée dès la conception.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Évolutivité",
      description:
        "Des solutions flexibles conçues aujourd'hui pour intégrer facilement les innovations de demain.",
    },
  ];

  const faqs = [
    {
      question: "Comment choisissez-vous la solution technique ?",
      answer:
        "Nous analysons d'abord vos objectifs commerciaux et vos contraintes. Nous sélectionnons ensuite les outils les plus pérennes et adaptés, qui vous garantissent performance et facilité d'évolution, sans vous enfermer dans une technologie obsolète.",
    },
    {
      question: "Application mobile ou site web ?",
      answer:
        "Tout dépend de l'usage. Si vous avez besoin de fonctionnalités spécifiques (GPS, caméra, notifications) et d'une fidélisation forte, l'application est idéale. Pour la visibilité et l'acquisition, le web prime. Souvent, une combinaison des deux est la stratégie gagnante.",
    },
    {
      question: "Puis-je faire évoluer mon projet plus tard ?",
      answer:
        "Absolument. Nous construisons des solutions modulaires. Votre outil numérique est conçu pour grandir avec votre entreprise, permettant d'ajouter de nouvelles fonctionnalités au fur et à mesure de votre développement.",
    },
    {
      question: "Suis-je propriétaire de ma plateforme ?",
      answer:
        "Oui, totalement. À la livraison finale, vous détenez l'intégralité des droits et de la propriété intellectuelle de votre solution numérique.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80"
            alt="Développement Web et Mobile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Développement <span className="text-primary">Sur-Mesure</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Transformez vos ambitions en outils numériques performants. Des
              solutions web et mobiles conçues pour accélérer votre croissance.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={handleOpenAppointment}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Lancer mon projet
                <ArrowRight className="w-5 h-5" />
              </button>
              {/* <button
                onClick={handleOpenAppointment}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border border-white/20"
              >
                Nos réalisations
              </button> */}
            </div>

            <div className="grid justify-items-start grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  Fiable
                </div>
                <div className="text-sm text-gray-300">Stabilité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  Impact
                </div>
                <div className="text-sm text-gray-300">Digital</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  Serein
                </div>
                <div className="text-sm text-gray-300">Securité</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase font-semibold text-primary">
                Notre Expertise
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Des solutions pour votre {""}
              <span className="block text-primary">réussite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous construisons les outils qui propulsent votre activité vers le
              niveau supérieur.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase font-semibold text-primary">
                Notre Méthodologie
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Un accompagnement {""}
              <span className="block text-primary">expert</span>
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

      {/* Benefits List Section */}
      <section className="py-20 px-4 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                L'avantage du <span className="text-primary">sur-mesure</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Ne vous contentez pas de solutions standards. Construisez
                l'outil qui correspond exactement à vos processus et à vos
                ambitions.
              </p>
              <ul className="space-y-4">
                {[
                  "Expérience utilisateur unique",
                  "Performance optimale",
                  "Capacité d'évolution illimitée",
                  "Sécurité renforcée",
                  "Propriété intellectuelle totale",
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
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80"
                alt="Digital et Innovation"
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Prêt à digitaliser votre succès ?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour transformer votre vision en une réalité
            numérique performante et durable.
          </p>
          <button
            onClick={handleOpenAppointment}
            className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Démarrer le projet
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
