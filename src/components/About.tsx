import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Target } from "lucide-react";
import { AppointmentForm } from "./AppointmentForm";
import { motion, useInView, useAnimation } from "framer-motion";

export const About: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const excellenceTextRef = useRef<HTMLSpanElement>(null);
  const arrowIconRef = useRef<HTMLDivElement>(null);

  // Animation controls
  const contentControls = useAnimation();
  const imageControls = useAnimation();
  const missionCardControls = useAnimation();

  // InView hooks
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Trigger animations when elements come into view
  useEffect(() => {
    if (isSectionInView) {
      contentControls.start("visible");
      imageControls.start("visible");
      missionCardControls.start("visible");
    }
  }, [isSectionInView, contentControls, imageControls, missionCardControls]);

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const contentItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
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

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section id="about" ref={sectionRef} className="bg-white">
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              ref={contentRef}
              variants={contentVariants}
              initial="hidden"
              animate={contentControls}
              className="text-center lg:text-left"
            >
              <motion.h1
                variants={contentItemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
              >
                Nous sommes{" "}
                <motion.span
                  ref={excellenceTextRef}
                  className="excellence-gradient"
                  style={{ backgroundPosition: "0% 50%" }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Go freelance
                </motion.span>
              </motion.h1>
              <motion.p
                variants={contentItemVariants}
                className="text-base sm:text-lg lg:text-xl text-text mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
              >
                une agence digitale stratégique et créative spécialisée dans la
                communication et marketing 360º ; Ainsi que la prospection
                commerciale 2.0 (Acquisition multicanale de nouveaux clients).
                Go freelance c'est aussi un puissant réseau de Freelances
                qualifiés et plate forme de télétravail, découvrir Go freelance
                | Jobs.
              </motion.p>
              <motion.button
                variants={contentItemVariants}
                whileHover="hover"
                onClick={handleShowForm}
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium w-fit mx-auto lg:mx-0"
              >
                Prendre un rendez-vous
                <motion.div
                  ref={arrowIconRef}
                  variants={arrowVariants}
                  animate="animate"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
            <motion.div
              ref={imageRef}
              variants={imageVariants}
              initial="hidden"
              animate={imageControls}
              className="relative"
            >
              <img
                src="/images/equipe.jpg"
                alt="L'équipe Go Freelance"
                className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 bg-white p-4 sm:p-6 rounded-xl shadow-lg hidden md:block">
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {showForm && <AppointmentForm onClose={handleCloseForm} />}
    </section>
  );
};
