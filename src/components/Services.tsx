import type React from "react";
import { Gem, CheckCircle, ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../data/services";
import { useAppointment } from "../contexts/AppointmentContext";
import { motion, Variants } from "framer-motion";

// Animation variants
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
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

const enterpriseVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const Services: React.FC = () => {
  const { openAppointment } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointment("Solution Enterprise");
  };

  return (
    <section
      id="services"
      className="sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-neutral-100"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 gradient-text"
            variants={itemVariants}
          >
            Nos Services
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-text max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Des solutions digitales complètes pour transformer votre business et
            accélérer votre croissance
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                popular={service.popular}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise Section */}
        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
          variants={enterpriseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Gem className="w-6 h-6 text-primary" />
                <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                  Solution Enterprise
                </h3>
              </div>
              <p className="text-text mb-6 max-w-2xl">
                Besoin d'une solution personnalisée ? Nous créons des packages
                sur mesure pour les grandes entreprises avec des besoins
                spécifiques.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                <li className="flex items-center gap-2 text-text">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Support prioritaire 24/7
                </li>
                <li className="flex items-center gap-2 text-text">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Équipe dédiée
                </li>
                <li className="flex items-center gap-2 text-text">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Solutions personnalisées
                </li>
                <li className="flex items-center gap-2 text-text">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Intégration sur mesure
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <p className="text-text mb-4">Tarification</p>
              <p className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                Sur devis
              </p>
              <motion.button
                className="bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-secondary-dark transition flex items-center gap-2 w-full sm:w-auto justify-center"
                onClick={handleOpenAppointment}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Demander un devis
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
