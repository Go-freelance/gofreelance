import {
  Target,
  CheckCircle,
  ArrowRight,
  Clock,
  Share2,
  MessageSquare,
  BarChart,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function CampagneCrossCanalPage() {
  const { openAppointment } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointment("Campagne Cross Canal");
  };

  const handleOpenStrategy = () => {
    openAppointment("Campagne Cross Canal - Stratégie gratuite");
  };

  const processSteps = [
    {
      step: 1,
      title: "Stratégie omnicanale",
      description: "Définition de votre stratégie cross-canal personnalisée",
      duration: "1 semaine",
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Création de contenu",
      description: "Production de contenus adaptés à chaque canal",
      duration: "2 semaines",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Déploiement",
      description: "Lancement coordonné sur tous les canaux",
      duration: "1 semaine",
      icon: <Share2 className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Optimisation",
      description: "Suivi des performances et optimisations",
      duration: "En continu",
      icon: <BarChart className="w-6 h-6" />,
    },
  ];

  const channels = [
    "Social Media (Facebook, Instagram, LinkedIn)",
    "Email marketing personnalisé",
    "SMS et notifications push",
    "Publicité display et retargeting",
    "Content marketing et SEO",
    "Influencer marketing",
    "Marketing automation",
    "Analytics cross-canal",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-100 via-white to-primary/5 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-primary font-medium">
                  Marketing Intégré
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Campagne{" "}
                <span className="excellence-gradient">Cross Canal</span>
              </h1>

              <p className="text-xl text-text mb-8 leading-relaxed">
                Maximisez votre impact avec des campagnes marketing intégrées
                sur tous vos canaux de communication. Une expérience client
                cohérente et performante.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Share2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">
                    +8 canaux intégrés
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <BarChart className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">+250% engagement</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleOpenAppointment}
                  className="bg-primary text-white px-8 py-4 rounded-md text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium shadow-lg"
                >
                  Lancer ma campagne
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleOpenStrategy}
                  className="bg-white text-secondary border border-neutral-200 px-8 py-4 rounded-md text-lg hover:bg-neutral-50 transition font-medium"
                >
                  Stratégie gratuite
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Campagne Cross Canal"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">8+</p>
                  <p className="text-sm text-text">Canaux intégrés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Canaux intégrés
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Une présence cohérente sur tous vos points de contact client
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Notre méthodologie
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Une approche structurée pour des campagnes cross-canal réussies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">
                    {step.title}
                  </h3>
                  <p className="text-text mb-4">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à unifier vos canaux marketing ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Créons ensemble une stratégie cross-canal qui maximise votre impact
            et vos conversions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleOpenAppointment}
              className="bg-white text-primary px-8 py-4 rounded-md text-lg hover:bg-neutral-100 transition flex items-center gap-2 font-medium"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleOpenStrategy}
              className="bg-transparent border border-white text-white px-8 py-4 rounded-md text-lg hover:bg-white/10 transition font-medium"
            >
              Stratégie gratuite
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
