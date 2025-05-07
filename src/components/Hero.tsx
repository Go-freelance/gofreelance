import React from "react";
import { ArrowRight, Award } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              We make <span className="excellence-gradient">Excellence</span>.
            </h1>
            <p className="text-lg sm:text-xl text-text mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0">
              Accélérez vos résultats business grâce à des stratégies digitales
              data-driven
            </p>
            <a
              href="#services"
              className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium w-fit mx-auto lg:mx-0"
            >
              Découvrir nos services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80"
              alt="Digital Strategy"
              className="rounded-2xl shadow-xl animate-float w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-text">Certifié</p>
                  <p className="font-bold text-secondary text-sm sm:text-base">
                    Meta Partner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
