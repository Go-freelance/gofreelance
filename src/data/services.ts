import React from "react";
import {
  Zap,
  Target,
  Compass as Wordpress,
  Smartphone,
  RefreshCw,
  Bot,
  Megaphone,
  Palette,
  Pen,
  Globe,
} from "lucide-react";
import type { ServiceCardProps } from "../types/common";

export interface ExpertiseCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  services: ServiceCardProps[];
}

export const expertises: ExpertiseCategory[] = [
  {
    id: "marketing",
    title: "Marketing Digital & Acquisition",
    description:
      "Stratégies d'acquisition et de conversion pour maximiser votre ROI",
    icon: React.createElement(Target, { className: "w-6 h-6" }),
    services: [
      {
        icon: React.createElement(Target, { className: "w-6 h-6" }),
        title: "Campagne Cross Canal",
        description:
          "Stratégies marketing intégrées sur tous vos canaux de communication.",
        features: [
          "Stratégie omnicanale",
          "Social Media Management",
          "Email & SMS marketing",
          "Publicité display",
          "Retargeting avancé",
        ],
      },
      {
        icon: React.createElement(Megaphone, { className: "w-6 h-6" }),
        title: "Campagne Publicitaire",
        description:
          "Campagnes publicitaires performantes sur tous les canaux digitaux.",
        features: [
          "Google Ads & Facebook Ads",
          "LinkedIn & TikTok Ads",
          "Stratégie créative",
          "Optimisation ROI",
          "Reporting détaillé",
        ],
      },
      {
        icon: React.createElement(Zap, { className: "w-6 h-6" }),
        title: "Automatisation",
        description:
          "Optimisez vos processus avec des solutions d'automatisation intelligentes.",
        features: [
          "Workflows automatisés",
          "Intégration CRM",
          "Email marketing automation",
          "Lead nurturing",
          "Reporting automatique",
        ],
      },
    ],
  },
  {
    id: "branding",
    title: "Identité de Marque & Création Graphique",
    description:
      "Créez une identité visuelle forte et mémorable pour votre marque",
    icon: React.createElement(Palette, { className: "w-6 h-6" }),
    services: [
      {
        icon: React.createElement(Palette, { className: "w-6 h-6" }),
        title: "Design de Marque",
        description:
          "Création d'identités visuelles uniques qui reflètent vos valeurs.",
        features: [
          "Logo & charte graphique",
          "Guide de style complet",
          "Déclinaisons print & digital",
          "Brand book professionnel",
          "Support & évolutions",
        ],
      },
      {
        icon: React.createElement(Pen, { className: "w-6 h-6" }),
        title: "Création Graphique",
        description:
          "Supports visuels impactants pour tous vos besoins de communication.",
        features: [
          "Design print & digital",
          "Infographies & illustrations",
          "Supports marketing",
          "Packaging & merchandising",
          "Motion design",
        ],
      },
      {
        icon: React.createElement(Megaphone, { className: "w-6 h-6" }),
        title: "Branding, PR & E-réputation",
        description:
          "Stratégie de marque, relations publiques et réputation en ligne.",
        features: [
          "Stratégie de marque",
          "Positionnement de la marque",
          "Création de la personnalité",
          "Développement de la notoriété",
          "Communication corporate & RSE",
        ],
      },
    ],
  },
  {
    id: "web",
    title: "Sites Web & Applications",
    description:
      "Solutions digitales performantes et évolutives pour votre business",
    icon: React.createElement(Globe, { className: "w-6 h-6" }),
    services: [
      {
        icon: React.createElement(Wordpress, { className: "w-6 h-6" }),
        title: "Développement WordPress Elementor",
        description:
          "Sites web professionnels avec WordPress et Elementor pour une gestion facile.",
        features: [
          "Design responsive",
          "Interface Elementor",
          "Optimisation SEO",
          "E-commerce WooCommerce",
          "Formation incluse",
        ],
      },
      {
        icon: React.createElement(Smartphone, { className: "w-6 h-6" }),
        title: "Développement Web et Mobile",
        description:
          "Applications web et mobiles sur mesure avec les dernières technologies.",
        features: [
          "Applications React/Vue.js",
          "Apps mobiles natives",
          "Progressive Web Apps",
          "API & Backend",
          "Maintenance continue",
        ],
      },
    ],
  },
  {
    id: "consulting",
    title: "Conseil & Stratégie",
    description: "Accompagnement expert pour votre transformation digitale",
    icon: React.createElement(RefreshCw, { className: "w-6 h-6" }),
    services: [
      {
        icon: React.createElement(RefreshCw, { className: "w-6 h-6" }),
        title: "Transformation Digitale",
        description:
          "Accompagnement complet dans votre transition vers le digital.",
        features: [
          "Audit digital complet",
          "Stratégie de transformation",
          "Formation des équipes",
          "Change management",
          "Suivi des performances",
        ],
      },
      {
        icon: React.createElement(Bot, { className: "w-6 h-6" }),
        title: "Intégration IA",
        description:
          "Intégrez l'intelligence artificielle dans vos processus métier.",
        features: [
          "Chatbots intelligents",
          "Analyse prédictive",
          "Automatisation IA",
          "Machine Learning",
          "Solutions personnalisées",
        ],
      },
    ],
  },
  {
    id: "training",
    title: "Formation & Up Skills",
    description:
      "Montées en compétences pour équipes marketing et entrepreneurs",
    icon: React.createElement(Zap, { className: "w-6 h-6" }),
    services: [
      {
        icon: React.createElement(Zap, { className: "w-6 h-6" }),
        title: "Upskills des équipes",
        description:
          "Formations ciblées pour équipes marketing et/ou entrepreneurs.",
        features: [
          "Ateliers pratiques",
          "Parcours personnalisés",
          "Cas d'usage métiers",
          "Suivi et évaluations",
          "Certificats de réussite",
        ],
      },
      {
        icon: React.createElement(RefreshCw, { className: "w-6 h-6" }),
        title: "Boot Camp",
        description:
          "Programmes intensifs et immersifs pour accélérer les compétences.",
        features: [
          "Format intensif",
          "Coaching expert",
          "Projets concrets",
          "Communauté d'entraide",
          "Accès aux ressources",
        ],
      },
      {
        icon: React.createElement(Pen, { className: "w-6 h-6" }),
        title: "Programmes de Formation (long & court)",
        description:
          "Formations longues et courtes appuyées sur nos plateformes.",
        features: [
          "HMsmarts.com",
          "mbschool.site",
          "Formats modulaires",
          "Blended learning",
          "Suivi post-formation",
        ],
      },
    ],
  },
];

// Keep legacy services export for backward compatibility
export const services: ServiceCardProps[] = expertises.flatMap(
  (expertise) => expertise.services
);
