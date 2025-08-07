import type React from "react";
import { ArrowRight, Target } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { AppointmentForm } from "./AppointmentForm";
import { gsap } from "gsap";

export const About: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const missionCardRef = useRef<HTMLDivElement>(null);
  const excellenceTextRef = useRef<HTMLSpanElement>(null);
  const arrowIconRef = useRef<HTMLDivElement>(null);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    // Initial state for elements
    if (contentRef.current && imageRef.current && missionCardRef.current) {
      gsap.set(
        [contentRef.current.children, imageRef.current, missionCardRef.current],
        { autoAlpha: 0, y: 50 }
      );
    }

    tl.to(sectionRef.current, { duration: 0, autoAlpha: 1 }); // Make section visible immediately
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { autoAlpha: 0, scale: 0.8, x: -50 },
        { autoAlpha: 1, scale: 1, x: 0, duration: 0.8, ease: "easeOut" }
      ).to(
        imageRef.current,
        { y: 5, duration: 2, repeat: -1, yoyo: true, ease: "easeInOut" },
        "<"
      ); // Floating effect
    }
    if (contentRef.current) {
      tl.fromTo(
        contentRef.current.children,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, stagger: 0.3 },
        "-=0.5"
      );
    }
    if (missionCardRef.current) {
      tl.fromTo(
        missionCardRef.current,
        { autoAlpha: 0, scale: 0.8 },
        { autoAlpha: 1, scale: 1, duration: 0.6, delay: 0.5 },
        "-=0.5"
      );
    }

    // Excellence Gradient Text Animation (background-position)
    if (excellenceTextRef.current) {
      gsap.to(excellenceTextRef.current, {
        backgroundPosition: "100% 50%",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    }

    // Button Hover Animation
    if (contentRef.current) {
      const button = contentRef.current.querySelector("button");
      if (button) {
        gsap.to(button, {
          scale: 1.05,
          y: -2,
          // duration: 0.2,
          // ease: "easeInOut",
          // paused: true,
          // overwrite: true,
        });
        button.addEventListener("mouseenter", () =>
          gsap.to(button, { scale: 1.05, y: -2 })
        );
        button.addEventListener("mouseleave", () =>
          gsap.to(button, { scale: 1, y: 0 })
        );
      }
    }

    // Arrow animation
    if (arrowIconRef.current) {
      gsap.to(arrowIconRef.current, {
        x: 5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-white">
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div ref={contentRef} className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Nous sommes{" "}
                <span
                  ref={excellenceTextRef}
                  className="excellence-gradient"
                  style={{ backgroundPosition: "0% 50%" }}
                >
                  Go freelance
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-text mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                une agence digitale stratégique et créative spécialisée dans la
                communication et marketing 360º ; Ainsi que la prospection
                commerciale 2.0 (Acquisition multicanale de nouveaux clients).
                Go freelance c'est aussi un puissant réseau de Freelances
                qualifiés et plate forme de télétravail, découvrir Go freelance
                | Jobs.
              </p>
              <button
                onClick={handleShowForm}
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium w-fit mx-auto lg:mx-0"
              >
                Prendre un rendez-vous
                <div ref={arrowIconRef}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
            <div ref={imageRef} className="relative">
              <img
                src="/images/equipe.jpg"
                alt="L'équipe Go Freelance"
                className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div
                ref={missionCardRef}
                className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 bg-white p-4 sm:p-6 rounded-xl shadow-lg hidden md:block"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForm && <AppointmentForm onClose={handleCloseForm} />}
    </section>
  );
};
