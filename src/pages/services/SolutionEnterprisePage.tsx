import {
  CheckCircle,
  ArrowRight,
  Clock,
  Gem,
  Shield,
  Users,
  Headphones,
  Zap,
} from "lucide-react";
import { useAppointment } from "../../contexts/AppointmentContext";

export default function SolutionEnterprisePage() {
  const { openAppointment } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointment("Solution Enterprise");
  };

  const processSteps = [
    {
      step: 1,
      title: "Analyse des besoins",
      description: "Étude approfondie de vos défis et objectifs",
      duration: "1-2 semaines",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Conception sur mesure",
      description: "Création d'une solution personnalisée",
      duration: "2-3 semaines",
      icon: <Gem className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Développement",
      description: "Implémentation avec votre équipe dédiée",
      duration: "Variable",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Support continu",
      description: "Accompagnement et maintenance 24/7",
      duration: "En continu",
      icon: <Headphones className="w-6 h-6" />,
    },
  ];

  const features = [
    "Équipe dédiée exclusivement à votre projet",
    "Solutions 100% personnalisées",
    "Support prioritaire 24/7",
    "Intégrations sur mesure avec vos systèmes",
    "Sécurité renforcée et conformité",
    "Scalabilité garantie",
    "Formation complète de vos équipes",
    "SLA garantis avec pénalités",
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
                  <Gem className="w-6 h-6" />
                </div>
                <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Premium
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Solution <span className="excellence-gradient">Enterprise</span>
              </h1>

              <p className="text-xl text-text mb-8 leading-relaxed">
                Des solutions digitales sur mesure pour les grandes entreprises.
                Équipe dédiée, développement personnalisé et support premium
                24/7.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">
                    Sécurité enterprise
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Headphones className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Support 24/7</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Équipe dédiée</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleOpenAppointment}
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium shadow-lg"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleOpenAppointment}
                  className="bg-white text-secondary border border-neutral-200 px-8 py-4 rounded-full text-lg hover:bg-neutral-50 transition font-medium"
                >
                  Planifier une démo
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Solution Enterprise"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">99.9%</p>
                  <p className="text-sm text-text">Uptime garanti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Avantages Enterprise
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Un service premium adapté aux exigences des grandes organisations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-text">{feature}</span>
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
              Notre approche
            </h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
              Un processus structuré pour des solutions d'exception
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

      {/* Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Tarification sur mesure
            </h2>
            <p className="text-xl text-text">
              Chaque projet étant unique, nous établissons un devis personnalisé
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-2xl border border-secondary/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Devis Personnalisé
                </h3>
                <p className="text-text mb-6">
                  Nos solutions Enterprise sont entièrement personnalisées selon
                  vos besoins spécifiques, votre secteur d'activité et vos
                  objectifs business.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Analyse gratuite de vos besoins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Proposition technique détaillée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Devis transparent et détaillé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Paiement échelonné possible</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-secondary mb-2">
                    Sur devis
                  </div>
                  <span className="text-text">Tarification personnalisée</span>
                </div>

                <button
                  onClick={handleOpenAppointment}
                  className="w-full bg-secondary text-white px-8 py-4 rounded-full text-lg hover:bg-secondary/90 transition flex items-center justify-center gap-2 font-medium mb-4"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm text-text">
                  Réponse sous 48h • Consultation gratuite • Sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt pour une solution d'exception ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discutons de vos défis et créons ensemble une solution digitale qui
            propulsera votre entreprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleOpenAppointment}
              className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleOpenAppointment}
              className="bg-transparent border border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white/10 transition font-medium"
            >
              Planifier une démo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
