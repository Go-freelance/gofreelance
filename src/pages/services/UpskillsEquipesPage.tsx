import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Target,
  Users,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  BarChart3,
  ArrowRight,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function UpskillsEquipesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openAppointmentForm } = useAppointment();
  
    const handleOpenAppointment = () => {
      openAppointmentForm("Upskills des équipes");
    };

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Formation Sur-Mesure",
      description:
        "Programmes adaptés aux besoins spécifiques de votre entreprise et de vos équipes.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Montée en Compétences Rapide",
      description:
        "Méthodologies intensives pour une acquisition rapide et efficace des compétences.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cohésion d'Équipe",
      description:
        "Renforcez l'esprit d'équipe à travers des ateliers collaboratifs et dynamiques.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Accrue",
      description:
        "Améliorez la productivité et les résultats grâce à des équipes mieux formées.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description:
        "Validation des acquis par des certifications reconnues dans le secteur.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Ressources Exclusives",
      description:
        "Accès à une bibliothèque de ressources et d'outils pour continuer l'apprentissage.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Audit des Compétences",
      description:
        "Évaluation précise des compétences actuelles et identification des besoins de formation.",
    },
    {
      step: "02",
      title: "Conception du Programme",
      description:
        "Création d'un parcours pédagogique personnalisé aligné sur vos objectifs stratégiques.",
    },
    {
      step: "03",
      title: "Formation & Ateliers",
      description:
        "Animation de sessions interactives, workshops et mises en situation réelles.",
    },
    {
      step: "04",
      title: "Suivi & Évaluation",
      description:
        "Mesure de l'impact de la formation et accompagnement post-formation.",
    },
  ];

  const faqs = [
    {
      question: "Quels types de formations proposez-vous ?",
      answer:
        "Nous proposons des formations en marketing digital, développement web, design, gestion de projet, et soft skills, adaptées à tous les niveaux.",
    },
    {
      question: "Les formations peuvent-elles se faire à distance ?",
      answer:
        "Oui, nous offrons des formats 100% en ligne, en présentiel dans vos locaux, ou en format hybride selon vos préférences.",
    },
    {
      question: "Comment mesurez-vous l'efficacité de la formation ?",
      answer:
        "Nous utilisons des évaluations pré et post-formation, ainsi que des indicateurs de performance (KPIs) définis ensemble pour mesurer le ROI.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/training.jpg" // Placeholder image path, ensure this exists or use a generic one
            alt="Upskills des équipes"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"; // Fallback image
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Upskills des <span className="text-primary">Équipes</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Propulsez votre entreprise vers de nouveaux sommets en développant
              les compétences de vos collaborateurs. Des programmes de formation
              sur-mesure pour une performance durable.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={handleOpenAppointment} className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid justify-items-start grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-gray-300">Entreprises formées</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">150+</div>
                <div className="text-sm text-gray-300">Apprenants</div>
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
              <span className="text-sm font-semibold text-primary">
                Pourquoi nous choisir ?
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Accélérez la croissance de {""}
              <span className="block text-primary">vos talents</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche pédagogique innovante centrée sur la pratique et les
              résultats concrets.
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Notre Méthodologie
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Un parcours de formation {""}
              <span className="block text-primary">structuré et efficace</span>
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
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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

      {/* Benefits List Section */}
      <section className="py-20 px-4 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                Investissez dans votre{" "}
                <span className="text-primary">capital humain</span>
              </h2>
              <p className="text-white/80 text-lg sm:text-xl mb-8">
                La formation n'est pas une dépense, c'est un investissement
                stratégique. Des équipes formées sont plus engagées, plus
                innovantes et plus performantes.
              </p>
              <ul className="space-y-4">
                {[
                  "Augmentation de la productivité",
                  "Réduction du turnover",
                  "Meilleure adaptabilité au marché",
                  "Innovation accrue",
                  "Culture d'entreprise renforcée",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg sm:text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 transform rotate-3 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Équipe en formation"
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
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
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
                  <span className="font-semibold text-secondary text-lg sm:text-xl pr-4">
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
            Prêt à faire monter vos équipes en compétences ?
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour construire le plan de formation idéal pour votre
            entreprise.
          </p>
          <button onClick={handleOpenAppointment} className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
            Discuter de vos besoins
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
