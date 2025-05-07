import React from "react";
import { Zap, ShieldCheck, Sparkles } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-primary rounded-full flex-shrink-0 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </div>
  </div>
);

export const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Rapidité",
      description:
        "Mise en place rapide et résultats visibles dès les premières semaines",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Expertise",
      description: "Plus de 10 ans d'expérience et une équipe certifiée",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Innovation",
      description:
        "Toujours à la pointe des dernières technologies et tendances",
    },
    // {
    //   icon: <Users className="w-6 h-6 text-white" />,
    //   title: "Support",
    //   description: "Accompagnement personnalisé et support réactif",
    // },
  ];

  return (
    <div className="py-24 px-4 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Pourquoi choisir Go Freelance ?
            </h2>
            <p className="text-xl mb-8 text-neutral-300">
              Nous combinons expertise technique, créativité et connaissance du
              marché local pour offrir des solutions digitales qui génèrent des
              résultats concrets.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="./images/team3.jpg"
                alt="Équipe en réunion"
                className="rounded-xl h-48 object-cover"
              />
              <img
                src="./images/team.jpg"
                alt="Présentation client"
                className="rounded-xl h-48 object-cover"
              />
              <img
                src="./images/team2.jpg"
                alt="Travail d'équipe"
                className="rounded-xl h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80"
                alt="Analyse de données"
                className="rounded-xl h-48 object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-center">
                <p className="text-3xl font-bold mb-1">150+</p>
                <p className="text-sm">Projets réussis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
