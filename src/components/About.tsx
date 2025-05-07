import type React from "react";
import { ArrowRight, Target } from "lucide-react";
import { useState } from "react";
import { AppointmentForm } from "./AppointmentForm";

export const About: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <section id="about" className="bg-white">
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Nous sommes{" "}
                <span className="excellence-gradient">Go Freelance</span>
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
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
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
            </div>
          </div>
        </div>
      </div>
      {showForm && <AppointmentForm onClose={handleCloseForm} />}
    </section>
  );
};
