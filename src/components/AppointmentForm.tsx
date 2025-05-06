"use client";

import React from "react";
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useAppointmentForm } from "../hooks/useAppointmentForm";
import { PersonalInfoStep } from "./AppointmentSteps/PersonalInfoStep";
import { AppointmentTypeStep } from "./AppointmentSteps/AppointmentTypeStep";
import { TeamMemberStep } from "./AppointmentSteps/TeamMemberStep";
import { DateTimeStep } from "./AppointmentSteps/DateTimeStep";
import { ConfirmationStep } from "./AppointmentSteps/ConfirmationStep";
import { SuccessStep } from "./AppointmentSteps/SuccessStep";

interface AppointmentFormProps {
  serviceTitle?: string;
  onClose: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  serviceTitle = "",
  onClose,
}) => {
  const {
    currentStep,
    formData,
    isSubmitting,
    isSuccess,
    error,
    availableTimeSlots,
    handleChange,
    handleAppointmentTypeChange,
    handleTeamMemberSelect,
    goToNextStep,
    goToPreviousStep,
    canProceedToNextStep,
    handleSubmit,
    teamMembers,
  } = useAppointmentForm({ initialService: serviceTitle, onClose });

  // Render step indicator
  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2 sm:overflow-visible sm:pb-0">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className="flex items-center flex-shrink-0">
            <div
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-medium ${
                currentStep === step
                  ? "bg-primary text-white"
                  : currentStep > step
                  ? "bg-primary/20 text-primary"
                  : "bg-neutral-200 text-neutral-500"
              }`}
            >
              {currentStep > step ? (
                <Check className="w-3 h-3 sm:w-4 sm:h-4" />
              ) : (
                step
              )}
            </div>
            {step < 5 && (
              <div
                className={`w-6 sm:w-12 h-1 ${
                  currentStep > step ? "bg-primary" : "bg-neutral-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  // Render step title
  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Informations personnelles";
      case 2:
        return "Lieu de rendez-vous";
      case 3:
        return "Sélectionnez un agent";
      case 4:
        return "Date et heure";
      case 5:
        return "Confirmation";
      default:
        return "";
    }
  };

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep formData={formData} handleChange={handleChange} />
        );
      case 2:
        return (
          <AppointmentTypeStep
            formData={formData}
            handleAppointmentTypeChange={handleAppointmentTypeChange}
          />
        );
      case 3:
        return (
          <TeamMemberStep
            formData={formData}
            teamMembers={teamMembers}
            handleTeamMemberSelect={handleTeamMemberSelect}
          />
        );
      case 4:
        return (
          <DateTimeStep
            formData={formData}
            availableTimeSlots={availableTimeSlots}
            handleChange={handleChange}
          />
        );
      case 5:
        return <ConfirmationStep formData={formData} />;
      default:
        return null;
    }
  };

  // Render navigation buttons
  const renderNavButtons = () => {
    return (
      <div className="flex justify-between mt-8 flex-wrap gap-3">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={goToPreviousStep}
            className="px-4 sm:px-6 py-2 sm:py-3 border border-neutral-200 rounded-full text-secondary hover:bg-neutral-50 transition flex items-center gap-2 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Retour
          </button>
        ) : (
          <button
            type="button"
            onClick={onClose}
            className="px-4 sm:px-6 py-2 sm:py-3 border border-neutral-200 rounded-full text-secondary hover:bg-neutral-50 transition text-sm sm:text-base"
          >
            Annuler
          </button>
        )}

        {currentStep < 5 ? (
          <button
            type="button"
            onClick={goToNextStep}
            disabled={!canProceedToNextStep()}
            className={`px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition flex items-center gap-2 text-sm sm:text-base ${
              !canProceedToNextStep() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Continuer
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition flex items-center gap-2 text-sm sm:text-base ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Envoi en cours..." : "Confirmer"}
            {!isSubmitting && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-xl my-2 sm:my-8">
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <h2 className="text-lg sm:text-2xl font-bold text-secondary truncate">
            {serviceTitle ? `Réserver: ${serviceTitle}` : "Prendre rendez-vous"}
          </h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-secondary transition flex-shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="p-4 sm:p-6">
          {isSuccess ? (
            <SuccessStep formData={formData} />
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step indicator */}
              {renderStepIndicator()}

              {/* Step title */}
              <h3 className="text-base sm:text-xl font-bold mb-4 sm:mb-6 text-center">
                {getStepTitle()}
              </h3>

              {/* Step content */}
              {renderStepContent()}

              {/* Error message */}
              {error && (
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Navigation buttons */}
              {renderNavButtons()}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
