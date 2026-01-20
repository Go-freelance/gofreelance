
import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { useAppointment } from "../contexts/AppointmentContext";


export const CallToAction: React.FC = () => {
  const { openAppointmentForm } = useAppointment();

  return (
    <section className="relative py-20 lg:py-32 px-4 overflow-hidden bg-primary">

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Prêt à propulser <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary/50">
                votre croissance ?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              Discutons de vos ambitions et construisons ensemble la stratégie digitale qui fera la différence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openAppointmentForm("Projet Global")}
                className="group relative px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg shadow-lg shadow-white/10 hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Démarrer votre projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => openAppointmentForm("Rendez-vous conseil")}
                className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5" />
                Réserver un appel
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] border border-white/30 rounded-full animate-[spin_30s_linear_infinite]" />
               <div className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] border border-white/15 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-secondary/50 group">
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="./images/cta.jpg" 
                alt="Équipe Go Freelance" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
