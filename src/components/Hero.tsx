import type React from "react";
import { ArrowRight, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 h-full sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-neutral-100 to-white  relative">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url("/images/fond.jpeg")`,
          backgroundSize: 1150,
          backgroundRepeat: "repeat",
          height: 740
        }}
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
          <div className="text-center lg:text-left flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              We make{" "}
              <span className="excellence-gradient relative inline-block">
                Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-text mb-4 max-w-xl mx-auto lg:mx-0">
              Accélérez vos résultats business grâce à des stratégies digitales
              data-driven
            </p>

            <p className="text-base text-text/70 mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0">
              Nous aidons les entreprises à se démarquer dans l'univers digital
              avec des solutions sur mesure et des résultats mesurables.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 duration-300"
              >
                Découvrir nos services
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="bg-white text-secondary border border-neutral-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-neutral-50 transition flex items-center gap-2 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
              >
                Nous contacter
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative overflow-visible">
            <div className="relative z-10">
              <img
                src="./images/hero.jpg"
                alt="Digital Strategy"
                className="rounded-2xl shadow-xl animate-float w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />

              {/* Badge flottant */}
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl animate-pulse-slow hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-text">Certifié</p>
                  <p className="font-bold text-secondary">Meta Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
