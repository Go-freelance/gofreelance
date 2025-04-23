import React from "react";
import { Zap, ShieldCheck, Sparkles, Users } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-6 rounded-xl">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-text">{description}</p>
  </div>
);

export const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Rapidité",
      description:
        "Mise en place rapide et résultats visibles dès les premières semaines",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Expertise",
      description: "Plus de 10 ans d'expérience et une équipe certifiée",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Innovation",
      description:
        "Toujours à la pointe des dernières technologies et tendances",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Support",
      description: "Accompagnement personnalisé et support réactif",
    },
  ];

  return (
    <div className="md:py-16 md:px-20 mt-16">
      <h3 className="text-3xl font-bold text-center mb-12">
        Pourquoi nous choisir ?
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};
