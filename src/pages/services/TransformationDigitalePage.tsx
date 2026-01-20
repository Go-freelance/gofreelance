import { useState } from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Lightbulb,
  Zap,
  ChevronDown,
  ChevronUp,
  BarChart3,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function TransformationDigitalePage() {
  const { openAppointmentForm } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleOpenAppointment = () => {
    openAppointmentForm("Transformation Digitale");
  };

  const processSteps = [
    {
      step: "01",
      title: "Audit & Vision",
      description:
        "Analyse 360° de votre maturité digitale et définition d'une roadmap stratégique alignée sur vos objectifs business.",
    },
    {
      step: "02",
      title: "Modernisation des Process",
      description:
        "Digitalisation des opérations clés pour éliminer les inefficacités et automatiser les tâches à faible valeur ajoutée.",
    },
    {
      step: "03",
      title: "Culture & Compétences",
      description:
        "Accompagnement au changement pour embarquer vos équipes et développer les compétences de demain.",
    },
    {
      step: "04",
      title: "Pilotage & Innovation",
      description:
        "Mise en place de dashboards (Data) pour piloter la performance et l'amélioration continue.",
    },
  ];

  const features = [
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Digitalisation Métier",
      description:
        "Transformation de vos processus manuels en workflows digitaux fluides et efficaces.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expérience Client",
      description:
        "Réinvention des parcours clients pour offrir une expérience omnicanale sans couture.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Intelligence",
      description:
        "Exploitation de vos données pour prendre des décisions éclairées et prédire les tendances.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Culture d'Innovation",
      description:
        "Instauration de méthodes agiles pour favoriser la créativité et la réactivité des équipes.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Nouveaux Business Models",
      description:
        "Identification de nouvelles sources de revenus rendues possibles par le digital.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Agilité Opérationnelle",
      description:
        "Des structures plus souples capables de s'adapter rapidement aux changements du marché.",
    },
  ];

  const faqs = [
    {
      question: "La transformation digitale concerne-t-elle les PME ?",
      answer:
        "Absolument. C'est même vital. La technologie permet aux PME d'être plus compétitives, plus rapides et d'offrir le même niveau de service que les grands groupes, avec plus d'agilité.",
    },
    {
      question: "Combien de temps dure une transformation ?",
      answer:
        "C'est un processus continu, mais nous structurons les projets en cycles de 3 à 6 mois pour délivrer de la valeur rapidement et maintenir la motivation des équipes.",
    },
    {
      question: "Comment gérez-vous la résistance au changement ?",
      answer:
        "Nous plaçons l'humain au cœur du processus. Par la formation, la communication et l'implication des collaborateurs dès le début (co-construction), nous transformons les craintes en opportunités.",
    },
    {
      question: "Quel est le ROI attendu ?",
      answer:
        "Il est multiple : réduction des coûts opérationnels, augmentation des ventes, amélioration de la satisfaction client et meilleure rétention des talents.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
            alt="Transformation Digitale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transformation <span className="text-primary">Digitale</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Réinventez votre entreprise pour l'ère numérique. Modernisez vos
              opérations, engagez vos collaborateurs et débloquez une nouvelle
              croissance.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={handleOpenAppointment}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Lancer la transformation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid justify-items-start grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">+40%</div>
                <div className="text-sm text-gray-300">Efficacité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  Agile
                </div>
                <div className="text-sm text-gray-300">Organisation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">Data</div>
                <div className="text-sm text-gray-300">Driven</div>
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
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase font-semibold text-primary">
                Piliers de Performance
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Une approche <span className="text-primary">360°</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous agissons sur tous les leviers de votre organisation pour
              assurer une transition pérenne.
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
              Conduire le <span className="text-primary">changement</span>
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
                Passez au niveau <span className="text-primary">supérieur</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                La transformation digitale n'est pas une option, c'est la
                condition de survie et de succès dans l'économie moderne.
              </p>
              <ul className="space-y-4">
                {[
                  "Gain de productivité immédiat",
                  "Réduction des coûts structurels",
                  "Meilleure collaboration interne",
                  "Satisfaction client accrue",
                  "Prise de décision basée sur la donnée",
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Travail d'équipe et Innovation"
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
            Prêt à façonner l'avenir de votre entreprise ?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un diagnostic personnalisé et découvrez votre
            potentiel de transformation.
          </p>
          <button
            onClick={handleOpenAppointment}
            className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Débuter ma transformation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
