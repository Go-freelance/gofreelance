import React, { useRef, useEffect } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { brands } from "../data/brands";
import { motion, useInView, useAnimation } from "framer-motion";

export const Brands: React.FC = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const brandsGridRef = useRef(null);

  // Animation controls
  const headerControls = useAnimation();
  const cardControls = useAnimation();

  // InView hooks
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isGridInView = useInView(brandsGridRef, { once: true, amount: 0.1 });

  // Trigger animations when elements come into view
  useEffect(() => {
    if (isHeaderInView) {
      headerControls.start("visible");
    }
  }, [isHeaderInView, headerControls]);

  useEffect(() => {
    if (isGridInView) {
      cardControls.start("visible");
    }
  }, [isGridInView, cardControls]);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerControls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Notre Écosystème
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Découvrez les marques innovantes que nous avons développées pour
            répondre aux besoins du marché digital
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div
          ref={brandsGridRef}
          className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.a
              key={brand.id}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={cardControls}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group block rounded-xl bg-neutral-200 border border-neutral-100 overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              }}
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
