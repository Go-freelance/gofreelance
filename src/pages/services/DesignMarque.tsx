import {
  Palette,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

import { useAppointment } from "../../contexts/AppointmentContext";

export default function DesignDeMarquePage() {
  const { openAppointmentForm } = useAppointment();

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

  //   {
  //     question: "Combien de temps prend la création d'une identité de marque ?",
  //     answer:
  //       "Le processus complet prend généralement entre 4 à 8 semaines, selon la complexité du projet et le nombre de révisions nécessaires.",
  //   },
  //   {
  //     question: "Que comprend le brand book ?",
  //     answer:
  //       "Le brand book inclut votre logo et ses variations, la palette de couleurs, les typographies, les règles d'utilisation, les exemples d'applications et les guidelines pour maintenir la cohérence de votre marque.",
  //   },
  //   {
  //     question: "Puis-je demander des révisions ?",
  //     answer:
  //       "Oui, nous incluons plusieurs tours de révisions dans nos forfaits pour garantir votre satisfaction complète. Le nombre exact dépend du package choisi.",
  //   },
  //   {
  //     question: "Recevrai-je les fichiers sources ?",
  //     answer:
  //       "Absolument ! Vous recevrez tous les fichiers sources dans différents formats (AI, PSD, PDF, PNG, SVG) pour une utilisation flexible sur tous les supports.",
  //   },
  // ];

  const portfolioItems = [
    {
      title: "AvadaPay",
      category: "Technologie",
      image: "/images/avada.jpg",
    },
    {
      title: "Restaurant Gastronomique",
      category: "Restauration",
      image: "/elegant-restaurant-branding.jpg",
    },
    {
      title: "Marque de Mode",
      category: "Fashion",
      image: "/luxury-fashion-brand-identity.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-primary pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-light rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mt-10 mx-auto">
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Créez une identité visuelle
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-200">
                forte et mémorable
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Nous créons des identités visuelles uniques qui reflètent vos
              valeurs et captivent votre audience. Du logo au brand book
              complet, nous donnons vie à votre marque.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => openAppointmentForm()}
                className="group bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Démarrer votre projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a
                href="#portfolio"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-all duration-300 font-medium"
              >
                Voir nos réalisations
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-2xl lg:text-4xl font-bold text-white mb-2">
                  10+
                </p>
                <p className="text-white/80 text-sm">Marques créées</p>
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-4xl font-bold text-white mb-2">
                  98%
                </p>
                <p className="text-white/80 text-sm">Satisfaction client</p>
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-4xl font-bold text-white mb-2">
                  15+
                </p>
                <p className="text-white/80 text-sm">Années d'expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Ce que nous créons
              <span className="block text-primary">pour vous</span>
            </h2>
            <p className="text-lg text-text max-w-2xl mx-auto">
              Une approche complète pour construire une identité de marque forte
              et cohérente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Comment nous travaillons
              <span className="block text-primary">ensemble</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-2xl border border-neutral-100 h-full">
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-neutral-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Nos réalisations
              <span className="block text-primary">récentes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm text-white/80 mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-secondary via-secondary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-light rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Prêt à créer votre identité de marque ?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Discutons de votre projet et créons ensemble une marque qui vous
            ressemble
          </p>
          <button
            onClick={() => openAppointmentForm()}
            className="group bg-white text-primary px-8 py-4 rounded-full text-lg hover:bg-neutral-100 transition-all duration-300 flex items-center gap-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mx-auto"
          >
            Prendre rendez-vous
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
}
