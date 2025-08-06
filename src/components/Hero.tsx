import type React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: 50,
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
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 h-full sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-neutral-100 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url("/images/fond.jpeg")`,
          backgroundSize: 1150,
          backgroundRepeat: "repeat",
          height: 740,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left flex flex-col justify-center h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              variants={itemVariants}
            >
              We make{" "}
              <motion.span
                className="excellence-gradient relative inline-block"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Excellence
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#C8006E] to-[#3B1E8A] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-text mb-4 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Accélérez vos résultats business grâce à des stratégies digitales
              data-driven
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base text-text/70 mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Nous aidons les entreprises à se démarquer dans l'univers digital
              avec des solutions sur mesure et des résultats mesurables.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#services"
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium shadow-lg shadow-primary/20"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Découvrir nos services
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/contact"
                  className="bg-white text-secondary border border-neutral-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-neutral-50 transition flex items-center gap-2 font-medium shadow-md"
                >
                  Nous contacter
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="flex justify-center lg:justify-end relative overflow-visible"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative z-10">
              <motion.img
                src="./images/hero.jpg"
                alt="Digital Strategy"
                className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                variants={floatingVariants}
                animate="animate"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
