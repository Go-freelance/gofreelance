import {
  ArrowRight,
  Palette,
  ImageIcon,
  FileText,
  Package,
  Video,
  Sparkles,
} from "lucide-react";

export default function CreationGraphiquePage() {
  // const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Print & Digital",
      description:
        "Créations graphiques adaptées à tous vos supports de communication, du print au digital.",
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Infographies & Illustrations",
      description:
        "Visualisations de données et illustrations personnalisées pour captiver votre audience.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Supports Marketing",
      description:
        "Brochures, flyers, affiches et tous supports pour booster votre communication.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Packaging & Merchandising",
      description:
        "Designs de packaging attractifs et merchandising pour valoriser vos produits.",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Motion Design",
      description:
        "Animations et vidéos graphiques pour dynamiser votre communication digitale.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Création Sur Mesure",
      description:
        "Solutions graphiques personnalisées adaptées à vos besoins spécifiques.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Brief Créatif",
      description:
        "Analyse de vos besoins, objectifs et contraintes pour définir la direction créative.",
    },
    {
      step: "02",
      title: "Recherche & Inspiration",
      description:
        "Exploration des tendances et recherche de références pour nourrir la création.",
    },
    {
      step: "03",
      title: "Création & Itération",
      description:
        "Conception des visuels avec plusieurs propositions et ajustements selon vos retours.",
    },
    {
      step: "04",
      title: "Finalisation & Livraison",
      description:
        "Préparation des fichiers finaux dans tous les formats nécessaires pour vos usages.",
    },
  ];

  const portfolio = [
    {
      title: "Campagne Print Luxe",
      category: "Print Design",
      image: "/luxury-print-campaign-design.jpg",
    },
    {
      title: "Infographie Corporate",
      category: "Infographie",
      image: "/corporate-infographic-design.jpg",
    },
    {
      title: "Packaging Produit",
      category: "Packaging",
      image: "/modern-product-packaging-design.jpg",
    },
  ];

  // const faqs = [
  //   {
  //     question: "Quels formats de fichiers sont livrés ?",
  //     answer:
  //       "Nous livrons tous les formats nécessaires : AI, PSD, PDF haute résolution pour le print, PNG, JPG, SVG pour le digital, et les formats sources modifiables.",
  //   },
  //   {
  //     question: "Combien de révisions sont incluses ?",
  //     answer:
  //       "Chaque projet inclut 3 cycles de révisions. Des révisions supplémentaires peuvent être ajoutées selon vos besoins.",
  //   },
  //   {
  //     question: "Quel est le délai de création ?",
  //     answer:
  //       "Le délai varie selon la complexité : 3-5 jours pour des supports simples, 1-2 semaines pour des projets plus élaborés. Nous proposons aussi des services express.",
  //   },
  //   {
  //     question: "Puis-je obtenir les droits de propriété ?",
  //     answer:
  //       "Oui, tous les droits de propriété intellectuelle vous sont transférés à la livraison finale du projet.",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (aligné sur Branding) */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/brand.jpg"
            alt="Création graphique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Création Graphique
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Supports visuels impactants pour votre communication: print,
              digital, motion et plus encore.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Démarrer votre projet
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-300 border border-white/20"
              >
                Voir nos réalisations
              </a>
            </div>

            <div className="grid grid-cols-3">
              <div className="">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-300">Créations livrées</div>
              </div>
              <div className="">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
              <div className="">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-gray-300">Formats livrés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Une expertise complète en {""}
              <span className="block text-primary">création graphique</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Du print au digital, nous concevons des visuels cohérents et
              performants.
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Un processus créatif {""}
              <span className="block text-primary">structuré</span>
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

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Nos réalisations en {""}
              <span className="block text-primary">création graphique</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Questions <span className="text-primary">fréquentes</span>
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
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-48" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary via-secondary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Prêt à créer des visuels qui marquent les esprits ?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et créons ensemble des supports graphiques
            impactants.
          </p>
          <button className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
            Planifier un appel stratégique
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
