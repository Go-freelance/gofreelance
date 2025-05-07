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
      <div className="bg-neutral-100 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Nous sommes{" "}
                <span className="excellence-gradient">Go Freelance</span>
              </h1>
              <p className="text-xl text-text mb-8">
                une agence digitale stratégique et créative spécialisée dans la
                communication et marketing 360º ; Ainsi que la prospection
                commerciale 2.0 (Acquisition multicanale de nouveaux clients).
                Go freelance c’est aussi un puissant réseau de Freelances
                qualifiés et plate forme de télétravail, découvrir Go freelance
                | Jobs.
              </p>
              <button
                onClick={handleShowForm}
                className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition flex items-center gap-2 font-medium w-fit"
              >
                Prendre un rendez-vous
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="L'équipe Go Freelance"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-text">Notre mission</p>
                    <p className="font-bold text-secondary">
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
