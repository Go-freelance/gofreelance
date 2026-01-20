import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Clock,
  Bot,
  BarChart3,
  Workflow,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function AutomatisationPage() {
  const { openAppointmentForm } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleOpenAppointment = () => {
    openAppointmentForm("Automatisation");
  };

  const processSteps = [
    {
      step: "01",
      title: "Audit des processus",
      description:
        "Analyse approfondie de vos workflows actuels et identification des opportunités d'automatisation.",
    },
    {
      step: "02",
      title: "Conception des workflows",
      description:
        "Design sur-mesure des processus automatisés pour une efficacité maximale.",
    },
    {
      step: "03",
      title: "Implémentation",
      description:
        "Mise en place technique et intégration transparente des solutions d'automatisation.",
    },
    {
      step: "04",
      title: "Optimisation & Formation",
      description:
        "Tests rigoureux, ajustements fins et formation complète de vos équipes.",
    },
  ];

  const features = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Workflows Sur-Mesure",
      description:
        "Des scénarios d'automatisation construits spécifiquement pour vos besoins métier.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intégration CRM",
      description:
        "Connexion fluide entre vos outils (CRM, Emailing, ERP) pour centraliser la donnée.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lead Nurturing",
      description:
        "Scoring et qualification automatique de vos prospects pour booster vos ventes.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Reporting Automatique",
      description:
        "Génération et envoi de rapports de performance sans intervention humaine.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Gain de Temps",
      description:
        "Libérez vos équipes des tâches répétitives pour qu'elles se concentrent sur la valeur ajoutée.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Zéro Erreur",
      description:
        "Éliminez les erreurs humaines grâce à des processus standardisés et fiables.",
    },
  ];

  const faqs = [
    {
      question: "Quels outils pouvez-vous automatiser ?",
      answer:
        "Nous travaillons avec la plupart des outils du marché : CRM (Salesforce, HubSpot), Emailing (Mailchimp, Brevo), Gestion de projet (Trello, Monday, Notion), et bien d'autres via des connecteurs API, workflow n8n.",
    },
    {
      question: "Est-ce que l'automatisation remplace mes employés ?",
      answer:
        "Non, l'objectif est de les libérer des tâches chronophages et répétitives pour qu'ils puissent se consacrer à des missions à plus forte valeur ajoutée.",
    },
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer:
        "Les premiers gains de productivité sont souvent visibles dès les premières semaines après la mise en production des workflows.",
    },
    {
      question: "Assurez-vous la maintenance des automatisations ?",
      answer:
        "Oui, nous proposons un suivi et une maintenance pour garantir que vos workflows continuent de fonctionner parfaitement même si vos outils évoluent.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/automation.jpg"
            alt="Automatisation Intelligente"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Automatisation <span className="text-primary">Intelligente</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Optimisez vos processus métier avec des solutions sur mesure.
              Gagnez du temps, réduisez les erreurs et concentrez-vous sur
              l'essentiel : votre croissance.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={handleOpenAppointment}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Automatiser maintenant
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid justify-items-start grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">+70%</div>
                <div className="text-sm text-gray-300">Productivité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  3 mois
                </div>
                <div className="text-sm text-gray-300">ROI Moyen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-300">Fiabilité</div>
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
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase font-semibold text-primary">
                Pourquoi automatiser ?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5 xl font-bold mb-6 text-gray-900 leading-tight">
              Des solutions pour booster votre {""}
              <span className="block text-primary">performance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des outils puissants pour transformer vos opérations quotidiennes.
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
                Notre Approche
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Une implémentation {""}
              <span className="block text-primary">sans friction</span>
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
                Transformez votre{" "}
                <span className="text-primary">efficacité opérationnelle</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                L'automatisation n'est pas un luxe, c'est une nécessité pour
                rester compétitif. Elle permet de structurer votre croissance et de soulager vos équipes.
              </p>
              <ul className="space-y-4">
                {[
                  "Réduction des coûts opérationnels",
                  "Amélioration de l'expérience client",
                  "Fiabilité des données",
                  "Scalabilité simplifiée",
                  "Focus sur l'innovation",
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
                src="/images/automation.jpg"
                alt="Technologie et Automatisation"
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
            Prêt à passer à la vitesse supérieure ?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour identifier les opportunités d'automatisation
            dans votre entreprise.
          </p>
          <button
            onClick={handleOpenAppointment}
            className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Discuter de l'automatisation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
