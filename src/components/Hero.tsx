import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

export const Hero: React.FC = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  const excellenceVariants: Variants = {
    visible: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -3,
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const arrowVariants: Variants = {
    animate: {
      x: [0, 5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="pt-24 h-full sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-neutral-100 to-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url("/images/fond.jpeg")`,
          backgroundSize: 1150,
          backgroundRepeat: "repeat",
          height: 740,
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex flex-col justify-center h-full"
          >
            <motion.h1
              variants={titleVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              We make{" "}
              <motion.span
                className="excellence-gradient relative inline-block"
                variants={excellenceVariants}
                animate="visible"
                style={{ backgroundPosition: "0% 50%" }}
              >
                Excellence
              </motion.span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="text-lg sm:text-xl text-text mb-4 max-w-xl mx-auto lg:mx-0"
            >
              Accélérez vos résultats business grâce à des stratégies digitales
              data-driven
            </motion.p>

            <motion.p
              variants={textVariants}
              className="text-base text-text/70 mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0"
            >
              Nous aidons les entreprises à se démarquer dans l'univers digital
              avec des solutions sur mesure et des résultats mesurables.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#services"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                Découvrir nos services
                <motion.div variants={arrowVariants} animate="animate">
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="bg-white text-secondary border border-neutral-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-neutral-50 transition flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
                >
                  Nous contacter
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end relative overflow-visible"
          >
            <div className="relative z-10">
              <motion.img
                src="./images/hero.jpg"
                alt="Digital Strategy"
                variants={floatingVariants}
                animate="animate"
                className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
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
