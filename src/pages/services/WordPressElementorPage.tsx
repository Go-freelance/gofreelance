import { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  CheckCircle2,
  ArrowRight,
  Layout,
  ShoppingCart,
  Shield,
  Zap,
  Settings,
  ChevronDown,
  ChevronUp,
  BarChart3,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function WordPressElementorPage() {
  const { openAppointmentForm } = useAppointment();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleOpenAppointment = () => {
    openAppointmentForm("Développement WordPress Elementor");
  };

  const processSteps = [
    {
      step: "01",
      title: "Conception & Design",
      description:
        "Création de maquettes graphiques uniques et validation du design system avant développement.",
    },
    {
      step: "02",
      title: "Développement CMS",
      description:
        "Intégration pixel-perfect sur WordPress avec Elementor Pro pour une flexibilité totale.",
    },
    {
      step: "03",
      title: "Optimisation globale",
      description:
        "Configuration SEO technique, optimisation de la vitesse et sécurisation du site.",
    },
    {
      step: "04",
      title: "Formation & Livraison",
      description:
        "Formation complète à l'administration de votre site pour une autonomie totale.",
    },
  ];

  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Design Sur-Mesure",
      description:
        "Une interface unique qui reflète parfaitement votre identité de marque, sans les limites des templates.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Interface Intuitive",
      description:
        "Gestion facile de vos contenus grâce à la puissance et la simplicité du constructeur Elementor.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Ready",
      description:
        "Intégration de WooCommerce pour transformer votre site en boutique en ligne performante.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité Maximale",
      description:
        "Protection avancée contre les attaques et sauvegardes automatiques de vos données.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ultra Performance",
      description:
        "Optimisation du code et des images pour des temps de chargement ultra-rapides (Core Web Vitals).",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Maintenance Facile",
      description:
        "Une structure technique propre qui facilite les mises à jour et les évolutions futures.",
    },
  ];

  const faqs = [
    {
      question: "Pourquoi choisir WordPress pour mon site ?",
      answer:
        "WordPress propulse plus de 40% du web. C'est la solution la plus flexible, évolutive et économique pour créer un site professionnel dont vous restez pleinement propriétaire.",
    },
    {
      question: "Serai-je capable de modifier le site moi-même ?",
      answer:
        "Absolument. Grâce à Elementor, vous disposez d'une interface visuelle 'glisser-déposer' pour modifier vos textes et images sans toucher une seule ligne de code.",
    },
    {
      question: "Le site sera-t-il bien référencé sur Google ?",
      answer:
        "Oui, nous concevons tous nos sites avec les meilleures pratiques SEO (structure, balisage, vitesse) pour maximiser votre visibilité dès le lancement.",
    },
    {
      question: "Proposez-vous la maintenance du site ?",
      answer:
        "Oui, nous proposons des contrats de maintenance pour gérer les mises à jour techniques, les sauvegardes et la sécurité, vous laissant l'esprit tranquille.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80"
            alt="WordPress Elementor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              WordPress <span className="text-primary">Elementor</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Créez un site web professionnel, performant et 100% administrable.
              La puissance du leader mondial des CMS alliée à une liberté de
              design totale.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={handleOpenAppointment}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Créer mon site
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid justify-items-start grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">43%</div>
                <div className="text-sm text-gray-300">Du Web Mondial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-gray-300">Autonomie</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">SEO</div>
                <div className="text-sm text-gray-300">Optimized</div>
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
              <Palette className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase font-semibold text-primary">
                Pourquoi WordPress ?
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              L'excellence technique au service de votre {""}
              <span className="block text-primary">image</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Une solution robuste qui évolue avec votre entreprise.
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
              <span className="text-sm uppercase font-semibold text-primary">
                Notre Processus
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              De la conception à la {""}
              <span className="block text-primary">mise en ligne</span>
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
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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


      <section className="py-20 px-4 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                Pourquoi choisir <span className="text-primary">WordPress</span>{" "}
                ?
              </h2>
              <p className="text-white/80 text-lg sm:text-xl mb-8">
                Ne soyez pas dépendant d'une agence ou d'une plateforme fermée.
                Avec WordPress, vous êtes propriétaire de votre outil de
                travail.
              </p>
              <ul className="space-y-4">
                {[
                  "Propriété totale de vos données",
                  "Écosystème de plugins infini",
                  "Structure SEO-friendly native",
                  "Mises à jour de sécurité régulières",
                  "Communauté mondiale active",
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
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80"
                alt="Dashboard WordPress"
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
                    <p className="text-text sm:text-base leading-relaxed">{faq.answer}</p>
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
            Prêt à lancer votre site ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir une
            estimation gratuite.
          </p>
          <button
            onClick={handleOpenAppointment}
            className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Démarrer mon projet
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
