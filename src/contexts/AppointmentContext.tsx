import React, { createContext, useContext, useState, useCallback } from "react";
import { AppointmentForm } from "../components/AppointmentForm";

interface AppointmentContextType {
  isOpen: boolean;
  serviceTitle?: string;
  openAppointment: (serviceTitle?: string) => void;
  closeAppointment: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(
  undefined
);

interface AppointmentProviderProps {
  children: React.ReactNode;
}

export const AppointmentProvider: React.FC<AppointmentProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceTitle, setServiceTitle] = useState<string | undefined>();

  const openAppointment = useCallback((serviceTitle?: string) => {
    setServiceTitle(serviceTitle);
    setIsOpen(true);
    // Empêcher le scroll du body quand le modal est ouvert
    document.body.style.overflow = "hidden";
  }, []);

  const closeAppointment = useCallback(() => {
    setIsOpen(false);
    setServiceTitle(undefined);
    // Restaurer le scroll du body
    document.body.style.overflow = "";
  }, []);

  const value = {
    isOpen,
    serviceTitle,
    openAppointment,
    closeAppointment,
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
      {/* Render du modal global */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <AppointmentForm
              serviceTitle={serviceTitle}
              onClose={closeAppointment}
            />
          </div>
        </div>
      )}
    </AppointmentContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useAppointment = (): AppointmentContextType => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error(
      "useAppointment must be used within an AppointmentProvider"
    );
  }
  return context;
};
