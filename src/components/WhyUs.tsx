import React from "react";
import { Zap, ShieldCheck, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

// Variants pour les animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.2,
    },
  }),
  hover: {
    x: 10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const iconVariants: Variants = {
  hover: {
    rotate: 360,
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.8 + i * 0.1,
    },
  }),
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const statsVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 1.5,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
    },
  },
};

const numberCountVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  index,
}) => (
  <motion.div
    className="flex gap-4 group cursor-pointer"
    custom={index}
    variants={cardVariants}
    whileHover="hover"
  >
    <motion.div
      className="w-12 h-12 bg-primary rounded-full flex-shrink-0 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30"
      variants={iconVariants}
      whileHover="hover"
    >
      {icon}
    </motion.div>
    <div>
      <motion.h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </motion.h3>
      <motion.p className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
        {description}
      </motion.p>
    </div>
  </motion.div>
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
  ];

  const images = [
    { src: "./images/team3.jpg", alt: "Équipe en réunion" },
    { src: "./images/team.jpg", alt: "Présentation client" },
    { src: "./images/team2.jpg", alt: "Travail d'équipe" },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80",
      alt: "Analyse de données",
    },
  ];

  return (
    <div className="py-24 px-4 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Pourquoi choisir{" "}
              <motion.span
                className="text-primary"
                animate={{
                  textShadow: [
                    "0 0 0px #cc057b",
                    "0 0 10px #cc057b",
                    "0 0 0px #cc057b",
                  ],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                Go freelance
              </motion.span>{" "}
              ?
            </motion.h2>

            <motion.p
              className="text-sm md:text-md mb-8 lg:text-lg text-neutral-300"
              variants={itemVariants}
            >
              Nous combinons expertise technique, créativité et connaissance du
              marché local pour offrir des solutions digitales qui génèrent des
              résultats concrets.
            </motion.p>

            <motion.div className="space-y-6" variants={containerVariants}>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index}
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="rounded-xl h-48 object-cover shadow-lg"
                  custom={index}
                  variants={imageVariants}
                  whileHover="hover"
                />
              ))}
            </div>

            <motion.div
              className="absolute -bottom-10 -left-10 bg-primary p-6 rounded-xl shadow-lg hidden md:block cursor-pointer"
              variants={statsVariants}
              whileHover="hover"
            >
              <div className="text-center">
                <motion.p
                  className="text-3xl font-bold mb-1"
                  variants={numberCountVariants}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  50+
                </motion.p>
                <p className="text-sm">Projets réussis</p>
              </div>
            </motion.div>

            {/* Éléments décoratifs */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute top-1/2 -left-8 w-12 h-12 bg-white/10 rounded-full blur-lg"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
