import { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  BarChart3,
} from "lucide-react";
import {useAppointment} from "../../contexts/AppointmentContext";

export default function DesignDeMarquePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const {openAppointmentForm} = useAppointment()
  const handleOpenAppointmentForm = () => {
    openAppointmentForm("Design de Marque")
  }

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Logo & Charte Graphique",
      description:
        "Création d'un logo unique et d'une charte graphique complète qui reflète votre identité.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Guide de Style Complet",
      description:
        "Documentation détaillée de tous les éléments visuels de votre marque.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Déclinaisons Print & Digital",
      description:
        "Adaptation de votre identité sur tous les supports de communication.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Brand Book Professionnel",
      description:
        "Un guide complet pour maintenir la cohérence de votre marque.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Support & Évolutions",
      description:
        "Accompagnement continu et évolutions de votre identité visuelle.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Stratégie de Marque",
      description:
        "Positionnement stratégique et développement de votre notoriété.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Découverte & Analyse",
      description:
        "Nous analysons votre marché, vos concurrents et définissons votre positionnement unique.",
    },
    {
      step: "02",
      title: "Création & Concepts",
      description:
        "Développement de plusieurs concepts créatifs alignés avec votre vision et vos valeurs.",
    },
    {
      step: "03",
      title: "Raffinement",
      description:
        "Affinage du concept choisi et création de toutes les déclinaisons nécessaires.",
    },
    {
      step: "04",
      title: "Livraison & Support",
      description:
        "Livraison complète avec brand book et accompagnement pour l'implémentation.",
    },
  ];

  const faqs = [
    {
      question: "Combien de temps prend la création d'une identité de marque ?",
      answer:
        "Le processus complet prend généralement entre 4 à 8 semaines, selon la complexité du projet et le nombre de révisions nécessaires.",
    },
    {
      question: "Que comprend le brand book ?",
      answer:
        "Le brand book inclut votre logo et ses variations, la palette de couleurs, les typographies, les règles d'utilisation, les exemples d'applications et les guidelines pour maintenir la cohérence de votre marque.",
    },
    {
      question: "Puis-je demander des révisions ?",
      answer:
        "Oui, nous incluons plusieurs tours de révisions dans nos forfaits pour garantir votre satisfaction complète. Le nombre exact dépend du package choisi.",
    },
    {
      question: "Recevrai-je les fichiers sources ?",
      answer:
        "Absolument ! Vous recevrez tous les fichiers sources dans différents formats (AI, PSD, PDF, PNG, SVG) pour une utilisation flexible sur tous les supports.",
    },
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (aligné sur Branding) */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/brand.jpg"
            alt="Identité de marque"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Identité de 
              <span className="text-primary"> Marque</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Nous créons des identités visuelles uniques qui reflètent vos
              valeurs et captivent votre audience. Du logo au brand book
              complet, nous donnons vie à votre marque.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={handleOpenAppointmentForm} className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Démarrer votre projet
                <ArrowRight className="w-5 h-5" />
              </button>
              {/* <a
                href="#portfolio"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border border-white/20"
              >
                Voir nos réalisations
              </a> */}
            </div>

            <div className="grid justify-items-start grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-gray-300">Marques créées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-gray-300">Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-gray-300">Années d'expertise</div>
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
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase font-semibold text-primary">
                Nos Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Ce que nous créons {""}
              <span className="block text-primary">pour vous</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète pour construire une identité de marque forte
              et cohérente.
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
              Un processus éprouvé en {""}
              <span className="block text-primary">4 étapes clés</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
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
            Prêt à créer une identité de marque distinctive ?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et concevons une identité qui vous
            ressemble.
          </p>
          <button className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
            Planifier un appel
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
