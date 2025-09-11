"use client";

import React, { useRef } from "react";
import { Gem, CheckCircle, ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../data/services";
import { useAppointment } from "../contexts/AppointmentContext";
import { motion, useInView, useAnimation } from "framer-motion";

export const Services: React.FC = () => {
  const { openAppointment } = useAppointment();
  const sectionRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const enterpriseSectionRef = useRef<HTMLDivElement>(null);

  // Animation controls
  const headerControls = useAnimation();
  const servicesGridControls = useAnimation();
  const enterpriseSectionControls = useAnimation();

  // InView hooks
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isServicesGridInView = useInView(servicesGridRef, {
    once: true,
    amount: 0.2,
  });
  const isEnterpriseSectionInView = useInView(enterpriseSectionRef, {
    once: true,
    amount: 0.3,
  });

  // Trigger animations when elements come into view
  React.useEffect(() => {
    if (isHeaderInView) {
      headerControls.start("visible");
    }
  }, [isHeaderInView, headerControls]);

  React.useEffect(() => {
    if (isServicesGridInView) {
      servicesGridControls.start("visible");
    }
  }, [isServicesGridInView, servicesGridControls]);

  React.useEffect(() => {
    if (isEnterpriseSectionInView) {
      enterpriseSectionControls.start("visible");
    }
  }, [isEnterpriseSectionInView, enterpriseSectionControls]);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const servicesGridVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  const enterpriseSectionVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  const arrowVariants = {
    animate: {
      x: [0, 5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  const handleOpenAppointment = () => {
    openAppointment("Solution Enterprise");
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-neutral-100"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerControls}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl sm:text-4xl font-bold mb-4 gradient-text"
          >
            Nos Services
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            className="text-lg sm:text-xl text-text max-w-3xl mx-auto"
          >
            Des solutions digitales complètes pour transformer votre business et
            accélérer votre croissance
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={servicesGridRef}
          variants={servicesGridVariants}
          initial="hidden"
          animate={servicesGridControls}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={serviceCardVariants}>
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
          ref={enterpriseSectionRef}
          variants={enterpriseSectionVariants}
          initial="hidden"
          animate={enterpriseSectionControls}
          className="bg-secondary rounded-2xl p-6 sm:p-8 shadow-lg mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4 space-y-6 md:space-y-0">
                <Gem className="w-6 h-6 text-primary" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Solution Enterprise
                </h3>
              </div>
              <p className="text-white mb-6 max-w-2xl">
                Besoin d'une solution personnalisée ? Nous créons des packages
                sur mesure pour les grandes entreprises avec des besoins
                spécifiques.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Support prioritaire 24/7
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Équipe dédiée
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Solutions personnalisées
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Intégration sur mesure
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <p className="text-white mb-4">Tarification</p>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Sur devis
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-secondary-dark transition flex items-center gap-2 w-full sm:w-auto justify-center"
                onClick={handleOpenAppointment}
              >
                Demander un devis
                <motion.div variants={arrowVariants} animate="animate">
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
