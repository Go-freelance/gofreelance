import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { AppointmentForm } from "./AppointmentForm";
import { motion, useScroll, useTransform } from "framer-motion";

export const About: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div 
            style={{ opacity }}
            className="relative z-10"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6"
            >
              Notre Essence
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-[1.1]"
            >
              Nous sommes <br />
              <span className="text-transparent bg-clip-text excellence-gradient">
                Go freelance.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 text-lg text-text/80 leading-relaxed"
            >
              <p>

                une agence digitale stratégique et créative spécialisée dans la
                communication et marketing 360º ; Ainsi que la prospection
                commerciale 2.0 (Acquisition multicanale de nouveaux clients).
                Go freelance c'est aussi un puissant réseau de Freelances
                qualifiés et plate forme de télétravail, découvrir Go freelance
                | Jobs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <button
                onClick={() => setShowForm(true)}
                className="group flex items-center gap-3 text-secondary font-bold text-lg hover:text-primary transition-colors"
              >
                <span className="border-b-2 border-secondary group-hover:border-primary transition-colors pb-1">
                  Collaborons ensemble
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <div className="relative">
            <motion.div
              style={{ y }}
              className="relative z-10 rounded-sm overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <img
                  src="/images/equipe.jpg"
                  alt="L'équipe Go Freelance"
                  className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
            </motion.div>

            {/* Minimalist decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {showForm && <AppointmentForm onClose={() => setShowForm(false)} />}
    </section>
  );
};
