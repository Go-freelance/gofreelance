import React from "react";
import { CheckCircle, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceCardProps } from "../types/common";
import { useAppointment } from "../contexts/AppointmentContext";
import { motion } from "framer-motion";
import { getServiceSlug } from "../utils/functions";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
}) => {
  const { openAppointmentForm } = useAppointment();

  const handleOpenAppointment = () => {
    openAppointmentForm(title);
  };

  return (
    <>
      <motion.div
        className="group bg-white p-8 rounded-3xl relative h-full flex flex-col transition-all duration-300 border border-neutral-200/60 hover:border-primary/20"
        whileHover={{
          y: -8,
          boxShadow:
            "0 20px 40px -5px rgba(21, 0, 87, 0.08), 0 10px 20px -6px rgba(0, 0, 0, 0.04)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
        }}
      >
        <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {React.cloneElement(icon as React.ReactElement, { className: "w-7 h-7" })}
        </div>

        <h3 className="text-lg sm:text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text/70 mb-6 text-base leading-relaxed">
          {description}
        </p>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-text/80 text-sm group/item"
            >
              <CheckCircle className="w-5 h-5 text-primary/60 flex-shrink-0 mt-0.5 group-hover/item:text-primary transition-colors" />
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 border-t border-neutral-100 flex flex-col gap-3">
          <Link
            to={`/services/${getServiceSlug(title)}`}
            className="w-full py-3 rounded-xl text-secondary font-semibold flex items-center justify-center gap-2 text-sm hover:bg-neutral-50 transition-colors group/link"
          >
            <Eye className="w-4 h-4 text-secondary/60 group-hover/link:text-secondary transition-colors" />
            En savoir plus
          </Link>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleOpenAppointment}
            className="w-full bg-secondary text-white px-4 py-3.5 rounded-xl hover:bg-primary transition-colors duration-300 font-semibold flex items-center justify-center gap-2 text-sm shadow-lg shadow-secondary/20 hover:shadow-primary/30"
          >
            Demander un devis
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};
