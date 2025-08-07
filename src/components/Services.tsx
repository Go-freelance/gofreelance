"use client";

import type React from "react";
import { Gem, CheckCircle, ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../data/services";
import { useAppointment } from "../contexts/AppointmentContext";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // supprimé car inutilisé

export const Services: React.FC = () => {
  const { openAppointment } = useAppointment();
  const sectionRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const enterpriseSectionRef = useRef<HTMLDivElement>(null);
  const enterpriseButtonRef = useRef<HTMLButtonElement>(null);
  const enterpriseArrowRef = useRef<HTMLDivElement>(null);

  const handleOpenAppointment = () => {
    openAppointment("Solution Enterprise");
  };

  useEffect(() => {
    // ScrollTrigger for section header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // ScrollTrigger for service cards grid
    if (servicesGridRef.current) {
      gsap.fromTo(
        servicesGridRef.current.children,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: servicesGridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // ScrollTrigger for Enterprise Section
    if (enterpriseSectionRef.current) {
      gsap.fromTo(
        enterpriseSectionRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "easeOut",
          scrollTrigger: {
            trigger: enterpriseSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // Button Hover Animation for Enterprise Section
    if (enterpriseButtonRef.current) {
      gsap.to(enterpriseButtonRef.current, {
        scale: 1.05,
        y: -2,
        duration: 0.2,
        ease: "easeInOut",
        paused: true,
        overwrite: true,
      });
      enterpriseButtonRef.current.addEventListener("mouseenter", () =>
        gsap.to(enterpriseButtonRef.current!, { scale: 1.05, y: -2 })
      );
      enterpriseButtonRef.current.addEventListener("mouseleave", () =>
        gsap.to(enterpriseButtonRef.current!, { scale: 1, y: 0 })
      );
    }

    // Arrow animation for Enterprise button
    if (enterpriseArrowRef.current) {
      gsap.to(enterpriseArrowRef.current, {
        x: 5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-neutral-100"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Nos Services
          </h2>
          <p className="text-lg sm:text-xl text-text max-w-3xl mx-auto">
            Des solutions digitales complètes pour transformer votre business et
            accélérer votre croissance
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={servicesGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              popular={service.popular}
            />
          ))}
        </div>

        {/* Enterprise Section */}
        <div
          ref={enterpriseSectionRef}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
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
              <button
                ref={enterpriseButtonRef}
                className="bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-secondary-dark transition flex items-center gap-2 w-full sm:w-auto justify-center"
                onClick={handleOpenAppointment}
              >
                Demander un devis
                <div ref={enterpriseArrowRef}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
