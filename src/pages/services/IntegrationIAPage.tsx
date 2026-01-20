import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  ArrowRight,
  Brain,
  Zap,
  BarChart3,
  Shield,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function IntegrationIAPage() {
  const { openAppointmentForm } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleOpenAppointment = () => {
    openAppointmentForm("Intégration IA");
  };

  const processSteps = [
    {
      step: "01",
      title: "Analyse des besoins",
      description:
        "Identification précise des cas d'usage où l'IA apportera le plus de valeur à votre entreprise.",
    },
    {
      step: "02",
      title: "Conception de la solution",
      description:
        "Architecture technique et choix des modèles IA les plus performants pour votre projet.",
    },
    {
      step: "03",
      title: "Développement & Intégration",
      description:
        "Implémentation sécurisée et connexion avec vos systèmes existants.",
    },
    {
      step: "04",
      title: "Formation & Optimisation",
      description:
        "Formation de vos équipes et amélioration continue des modèles.",
    },
  ];

  const solutions = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Assistants Virtuels",
      description:
        "Chatbots et agents conversationnels avancés pour supporter vos clients 24/7.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description:
        "Algorithmes prédictifs pour anticiper les tendances et optimiser vos stocks/ventes.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automatisation Cognitive",
      description:
        "Automatisation de tâches complexes nécessitant de la compréhension (traitement de documents, emails).",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité & Fraude",
      description:
        "Détection d'anomalies en temps réel pour protéger vos actifs et transactions.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analyse de Données",
      description:
        "Transformation de vos données brutes en insights actionnables.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Vision par Ordinateur",
      description:
        "Analyse automatique d'images et vidéos pour le contrôle qualité ou la sécurité.",
    },
  ];

  const faqs = [
    {
      question: "L'IA est-elle adaptée aux petites entreprises ?",
      answer:
        "Oui, l'IA est devenue accessible. Nous proposons des solutions scalables qui permettent aux PME de gagner en productivité sans investissement pharaonique.",
    },
    {
      question: "Comment garantissez-vous la sécurité des données ?",
      answer:
        "La confidentialité et la sécurité sont nos priorités. Nous utilisons des architectures sécurisées et respectons les normes RGPD pour le traitement des données.",
    },
    {
      question: "Faut-il avoir des données structurées ?",
      answer:
        "C'est mieux, mais pas obligatoire. Nous pouvons vous accompagner dans la phase de collecte et de nettoyage de vos données.",
    },
    {
      question: "Quelle est la durée d'un projet d'intégration IA ?",
      answer:
        "Un prototype (POC) peut être réalisé en 2 à 4 semaines. Une intégration complète prend généralement entre 2 et 4 mois selon la complexité.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ai.jpg"
            alt="Intégration Intelligence Artificielle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Intégration <span className="text-primary">IA</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Propulsez votre entreprise dans le futur. Automatisez, prédisez et
              innovez grâce à des solutions d'Intelligence Artificielle sur
              mesure, éthiques et performantes.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={handleOpenAppointment}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Intégrer l'IA
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid justify-items-start grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">x10</div>
                <div className="text-sm text-gray-300">Rapidité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">-40%</div>
                <div className="text-sm text-gray-300">Coûts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-300">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase font-semibold text-primary">
                Solutions Intelligentes
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              L'IA au service de votre {""}
              <span className="block text-primary">croissance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des technologies de pointe adaptées à vos défis business concrets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
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
              De l'idée à la {""}
              <span className="block text-primary">réalité</span>
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
                Innovez avec <span className="text-primary">l'IA</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Ne laissez pas la révolution technologique se faire sans vous.
                L'IA est le levier de croissance le plus puissant de la
                décennie.
              </p>
              <ul className="space-y-4">
                {[
                  "Prise de décision éclairée par la data",
                  "Automatisation des tâches cognitives",
                  "Hyper-personnalisation client",
                  "Développement de nouveaux produits",
                  "Avantage concurrentiel décisif",
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
                src="/images/ai.jpg"
                alt="Intelligence Artificielle Futur"
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
            Prêt à construire le futur ?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour explorer comment l'IA peut révolutionner votre
            secteur d'activité.
          </p>
          <button
            onClick={handleOpenAppointment}
            className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Démarrer un projet IA
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
