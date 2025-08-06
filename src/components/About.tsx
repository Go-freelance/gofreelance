import type React from "react";
import { ArrowRight, Target } from "lucide-react";
import { useState } from "react";
import { AppointmentForm } from "./AppointmentForm";
import { motion, Variants } from "framer-motion";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: -50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
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

const floatingVariants: Variants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const About: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <section id="about" className="bg-white">
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="text-center lg:text-left"
              variants={itemVariants}
            >
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
                variants={itemVariants}
              >
                Nous sommes{" "}
                <motion.span
                  className="excellence-gradient"
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Go freelance
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-text mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                une agence digitale stratégique et créative spécialisée dans la
                communication et marketing 360º ; Ainsi que la prospection
                commerciale 2.0 (Acquisition multicanale de nouveaux clients).
                Go freelance c'est aussi un puissant réseau de Freelances
                qualifiés et plate forme de télétravail, découvrir Go freelance
                | Jobs.
              </motion.p>
              <motion.button
                onClick={handleShowForm}
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium w-fit mx-auto lg:mx-0"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Prendre un rendez-vous
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
            <motion.div className="relative" variants={imageVariants}>
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="L'équipe Go Freelance"
                className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                variants={floatingVariants}
                animate="animate"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              />
              <motion.div
                className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 bg-white p-4 sm:p-6 rounded-xl shadow-lg hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-text">
                      Notre mission
                    </p>
                    <p className="font-bold text-secondary text-sm sm:text-base">
                      Votre succès digital
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {showForm && <AppointmentForm onClose={handleCloseForm} />}
    </section>
  );
};
