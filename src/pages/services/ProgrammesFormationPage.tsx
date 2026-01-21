import { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Monitor,
  Calendar,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Laptop,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function ProgrammesFormationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { openAppointmentForm } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointmentForm("Programmes de Formation (long & court)");
  };

  const programTypes = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Formations Courtes",
      description:
        "Modules intensifs de 1 à 5 jours pour acquérir une compétence spécifique rapidement.",
      features: [
        "Focus opérationnel immédiat",
        "Formats intensifs",
        "Idéal pour les mises à jour",
        "Certificat de participation",
      ],
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Parcours Longs",
      description:
        "Programmes complets de plusieurs semaines ou mois pour une reconversion ou une expertise approfondie.",
      features: [
        "Apprentissage en profondeur",
        "Projets fil rouge",
        "Mentorat dédié",
        "Certification reconnue",
      ],
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "E-learning & Blended",
      description:
        "Flexibilité maximale avec nos plateformes en ligne et sessions hybrides.",
      features: [
        "Accès 24/7 aux ressources",
        "Rythme personnalisé",
        "Webinaires live",
        "Communauté en ligne",
      ],
    },
  ];

  const platforms = [
    // {
    //   name: "HMsmarts.com",
    //   description:
    //     "Notre plateforme dédiée aux compétences digitales et marketing.",
    //   image:
    //     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    //   features: ["Cours vidéos HD", "Quiz interactifs", "Exercices pratiques"],
    // },
    {
      name: "mbschool.site",
      description: "L'école en ligne pour les entrepreneurs et dirigeants.",
      image: "/images/mbs.png",
      features: ["Masterclasses experts", "Études de cas", "Réseau alumni"],
    },
  ];

  const faqs = [
    {
      question: "Quels sont les prérequis pour vos formations ?",
      answer:
        "Les prérequis varient selon le niveau du programme. Certaines formations sont ouvertes aux débutants, d'autres nécessitent une expérience préalable. Consultez la fiche détaillée de chaque formation pour plus d'infos.",
    },
    {
      question: "Délivrez-vous des diplômes ?",
      answer:
        "Nous délivrons des certificats de réussite pour toutes nos formations. Nos parcours longs peuvent mener à des certifications professionnelles reconnues par l'État (RNCP) selon les partenariats.",
    },
    {
      question: "Comment se déroule l'inscription ?",
      answer:
        "Vous pouvez vous pré-inscrire en ligne ou contacter nos conseillers pédagogiques qui vous guideront vers le programme le plus adapté à votre profil et vos objectifs.",
    },
    {
      question: "Puis-je suivre la formation à mon rythme ?",
      answer:
        "Pour les formats e-learning, oui, vous avancez à votre rythme. Pour les sessions live ou présentielles, un calendrier est établi à l'avance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Programmes de Formation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto my-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Programmes de <span className="text-primary">Formation</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Développez votre potentiel avec nos formations d'excellence. Du
              format court intensif au parcours long certifiant, trouvez la
              formule qui vous correspond.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={handleOpenAppointment}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Parler à un conseiller
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid justify-items-start grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-gray-300">Programmes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-gray-300">Taux de réussite</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-300">Accès plateforme</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Nos Formats
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Des formats adaptés à {""}
              <span className="block text-primary">votre emploi du temps</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Flexibilité et efficacité sont au cœur de notre pédagogie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {type.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 min-h-[80px]">
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Monitor className="w-4 h-4 text-primary" />
              <span className="text-sm uppercase font-semibold text-primary">
                Notre plateforme
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Apprenez où vous voulez, {""}
              <span className="block text-primary">quand vous voulez</span>
            </h2>
          </div>

          <div className="flex justify-center gap-12">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg w-full max-w-2xl"
              >
                <div className="absolute inset-0">
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>
                <div className="relative p-8 h-full flex flex-col justify-end min-h-[400px]">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-gray-200 mb-6 text-sm sm:text-base">
                    {platform.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {platform.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
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
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
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
            Prêt à commencer votre apprentissage ?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté d'apprenants et boostez votre carrière
            dès aujourd'hui.
          </p>
          <button
            onClick={handleOpenAppointment}
            className="px-8 py-4 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            S'inscrire maintenant
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
