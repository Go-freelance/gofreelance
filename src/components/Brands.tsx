import type React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { brands } from "../data/brands";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // supprimé car inutilisé

export const Brands: React.FC = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const brandsGridRef = useRef(null);
  const brandCardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // ScrollTrigger for section header
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
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

    // ScrollTrigger for individual brand cards
    brandCardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        gsap.fromTo(
          cardRef,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardRef,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );

        // GSAP hover animations for brand cards
        cardRef.addEventListener("mouseenter", () => {
          gsap.to(cardRef, {
            scale: 1.03,
            y: -8,
            boxShadow:
              "0 15px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.05)",
            duration: 0.3,
            ease: "power1.out",
            overwrite: true,
          });
        });
        cardRef.addEventListener("mouseleave", () => {
          gsap.to(cardRef, {
            scale: 1,
            y: 0,
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            duration: 0.3,
            ease: "power1.out",
            overwrite: true,
          });
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Notre Écosystème
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Découvrez les marques innovantes que nous avons développées pour
            répondre aux besoins du marché digital
          </p>
        </div>

        {/* Brands Grid */}
        <div
          ref={brandsGridRef}
          className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {brands.map((brand, index) => (
            <a
              key={brand.id}
              ref={(el) => (brandCardRefs.current[index] = el)}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl bg-neutral-200 border border-neutral-100 overflow-hidden"
            >
              {/* Brand Logo */}
              <div
                className={`h-30 flex items-center justify-center p-6 relative`}
                style={{ backgroundColor: brand.accentColor }}
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  className="h-8 object-contain transition-transform group-hover:scale-110"
                />
              </div>

              {/* Brand Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: brand.color || "#333333" }}
                  >
                    {brand.name}
                  </h3>
                  <span className="text-neutral-300 group-hover:text-primary transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
                <p className="text-text/80 mb-4">{brand.description}</p>

                {/* Tags */}
                {brand.tags && (
                  <div className="flex flex-wrap gap-2">
                    {brand.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full text-white"
                        style={{
                          backgroundColor: brand.color || "#333333",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Link */}
              <div className="px-6 py-3 border-t border-neutral-100 flex justify-between items-center">
                <span
                  className="text-sm font-medium transition-colors duration-300"
                  style={{ color: brand.color || "#333333" }}
                >
                  Découvrir
                </span>
                <ArrowRight
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  style={{ color: brand.color || "#333333" }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
