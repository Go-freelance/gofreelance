import { useRef, useState, useEffect } from "react";
import { Gem, CheckCircle, ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { expertises } from "../data/services";
import { useAppointment } from "../contexts/AppointmentContext";
import { motion, useInView, useAnimation } from "framer-motion";

export const Services: React.FC = () => {
  const { openAppointmentForm } = useAppointment();
  const sectionRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const enterpriseSectionRef = useRef<HTMLDivElement>(null);

  const [activeExpertise, setActiveExpertise] = useState(expertises[0].id);

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
  useEffect(() => {
    if (isHeaderInView) {
      headerControls.start("visible");
    }
  }, [isHeaderInView, headerControls]);

  useEffect(() => {
    if (isServicesGridInView) {
      servicesGridControls.start("visible");
    }
  }, [isServicesGridInView, servicesGridControls]);

  useEffect(() => {
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
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  const handleOpenAppointment = () => {
    openAppointmentForm("Solution Enterprise");
  };

  const currentExpertise =
    expertises.find((exp) => exp.id === activeExpertise) || expertises[0];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-100 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerControls}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl sm:text-4xl font-bold mb-4 gradient-text"
          >
            Nos Expertises
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="text-lg sm:text-xl text-text/70 max-w-3xl mx-auto leading-relaxed"
          >
            Des solutions digitales sur mesure pour propulser votre entreprise
            vers l'excellence
          </motion.p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {expertises.map((expertise) => (
              <button
                key={expertise.id}
                onClick={() => setActiveExpertise(expertise.id)}
                className={`
                  group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300
                  ${
                    activeExpertise === expertise.id
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }
                `}
              >
                <span
                  className={
                    activeExpertise === expertise.id
                      ? "text-white"
                      : "text-primary"
                  }
                >
                  {expertise.icon}
                </span>
                <span className="text-sm sm:text-base">{expertise.title}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeExpertise}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentExpertise.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={servicesGridRef}
          key={activeExpertise}
          variants={servicesGridVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {currentExpertise.services.map((service, index) => (
            <motion.div key={index} variants={serviceCardVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={enterpriseSectionRef}
          variants={enterpriseSectionVariants}
          initial="hidden"
          animate={enterpriseSectionControls}
          className="relative bg-secondary rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden"
        >
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-xl backdrop-blur-sm">
                  <Gem className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Solution Enterprise
                  </h3>
                </div>
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
                Une approche personnalisée et des solutions d'exception pour les
                entreprises qui visent l'excellence.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Support prioritaire 24/7",
                  "Équipe dédiée d'experts",
                  "Solutions 100% personnalisées",
                  "Intégration sur mesure",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right lg:min-w-[280px]">
              <div className="mb-6">
                <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                  Tarification
                </p>
                <div className="flex items-baseline justify-center lg:justify-end gap-2">
                  <span className="text-4xl sm:text-5xl font-bold text-white">
                    Sur devis
                  </span>
                </div>
                <p className="text-white/60 text-sm mt-2">
                  Adapté à vos besoins
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center gap-10 w-full shadow-lg hover:shadow-xl backdrop-blur-sm"
                onClick={handleOpenAppointment}
              >
                Demander un devis
                <motion.div
                  variants={arrowVariants}
                  animate="animate"
                  className="group-hover:translate-x-1 transition-transform duration-300"
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
