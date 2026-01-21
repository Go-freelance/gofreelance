import React, { useRef, useState, useEffect } from "react";
import { Gem, ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { expertises } from "../data/services";
import { useAppointment } from "../contexts/AppointmentContext";
import { motion, useScroll, useSpring } from "framer-motion";

export const Services: React.FC = () => {
  const { openAppointmentForm } = useAppointment();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>(expertises[0].id);

  // Scroll progress for the sidebar indicator
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`expertise-${id}`);
    if (element) {
      const offset = 80; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Intersection Observer with better scroll detection
  useEffect(() => {
    const observerOptions = {
      // Multiple thresholds for more precise detection
      threshold: [0, 0.25, 0.5, 0.75, 1],
      // Center the detection zone on the viewport
      rootMargin: "-20% 0px -60% 0px",
    };

    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id.replace("expertise-", "");

        if (entry.isIntersecting) {
          // Store the intersection ratio for each visible section
          visibleSections.set(id, entry.intersectionRatio);
        } else {
          visibleSections.delete(id);
        }
      });

      // Find the section with the highest intersection ratio
      if (visibleSections.size > 0) {
        let maxRatio = 0;
        let mostVisibleId = "";

        visibleSections.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleId = id;
          }
        });

        if (mostVisibleId) {
          setActiveId(mostVisibleId);
        }
      }
    }, observerOptions);

    // Observe all expertise sections
    expertises.forEach((expertise) => {
      const element = document.getElementById(`expertise-${expertise.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-20 lg:px-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
          >
            NOS SERVICES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 "
          >
            Une expertise <span className="gradient-text">360°</span> pour
            <br />
            votre croissance
          </motion.h2>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* Sticky Sidebar Navigation */}
          <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-32">
            <div className="relative pl-6 border-l-2 border-neutral-200">
              <motion.div
                className="absolute left-[-2px] top-0 w-[2px] h-full bg-primary origin-top"
                style={{ scaleY }}
              />

              <nav className="space-y-6">
                {expertises.map((expertise) => (
                  <button
                    key={expertise.id}
                    onClick={() => scrollToSection(expertise.id)}
                    className={`group flex items-center gap-4 w-full text-left transition-all duration-300 ${
                      activeId === expertise.id
                        ? "opacity-100 translate-x-2"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <div
                      className={`
                      p-2 rounded-lg transition-colors duration-300
                      ${
                        activeId === expertise.id
                          ? "bg-primary text-white"
                          : "bg-white text-secondary group-hover:bg-neutral-100"
                      }
                    `}
                    >
                      {React.cloneElement(
                        expertise.icon as React.ReactElement,
                        { className: "w-5 h-5" }
                      )}
                    </div>
                    <div>
                      <span
                        className={`block text-lg font-bold ${
                          activeId === expertise.id
                            ? "text-secondary"
                            : "text-text"
                        }`}
                      >
                        {expertise.title}
                      </span>
                      {activeId === expertise.id && (
                        <motion.span
                          layoutId="activeDesc"
                          className="text-sm text-text/60 line-clamp-1"
                        >
                          {expertise.description}
                        </motion.span>
                      )}
                    </div>
                  </button>
                ))}
              </nav>

              <div
                className="mt-12 p-6 bg-secondary rounded-2xl text-white relative overflow-hidden group cursor-pointer"
                onClick={() => openAppointmentForm("Consultation")}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-10 -mt-10" />
                <h4 className="text-lg font-bold mb-2 relative z-10">
                  Besoin d'un conseil ?
                </h4>
                <p className="text-white/70 text-sm mb-4 relative z-10">
                  Discutons de votre projet lors d'un premier échange gratuit.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Réserver un appel <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="lg:col-span-8 space-y-24 lg:space-y-32">
            {expertises.map((expertise) => (
              <motion.div
                key={expertise.id}
                id={`expertise-${expertise.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-8 lg:hidden">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    {React.cloneElement(expertise.icon as React.ReactElement, {
                      className: "w-6 h-6",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    {expertise.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {expertise.services.map((service, serviceIndex) => (
                    <ServiceCard key={serviceIndex} {...service} />
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Enterprise Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden bg-secondary text-white p-8 md:p-12"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/30 blur-[100px] rounded-full" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-4">
                    <Gem className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold tracking-wider uppercase">
                      Enterprise
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Une solution sur mesure ?
                  </h3>
                  <p className="text-white/70 max-w-md">
                    Pour les projets complexes nécessitant une infrastructure
                    dédiée et un accompagnement premium.
                  </p>
                </div>
                <button
                  onClick={() => openAppointmentForm("Solution Enterprise")}
                  className="whitespace-nowrap bg-white text-secondary px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition-colors flex items-center gap-2 group"
                >
                  Contacter l'équipe
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
