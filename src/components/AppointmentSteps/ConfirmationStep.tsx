import React from "react";
import { CalendarIcon, Clock, Building, Video } from "lucide-react";
import type { CompleteAppointmentFormData } from "../../hooks/useAppointmentForm";
import { teamMembers } from "../../data/teams";

interface ConfirmationStepProps {
  formData: CompleteAppointmentFormData;
}

export const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  formData,
}) => {
  // Trouver le membre d'équipe sélectionné par son nom
  const selectedTeamMember = teamMembers.find(
    (member) => member.name === formData.selectedTeamMember
  );
  return (
    <div className="space-y-3 sm:space-y-6">
      <div className="bg-neutral-50 p-3 sm:p-6 rounded-xl">
        <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-secondary">
          Récapitulatif de votre rendez-vous
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-2 sm:space-y-3">
            <div>
              <p className="text-xs sm:text-sm text-neutral-500">Service</p>
              <p className="font-medium text-sm sm:text-base">
                {formData.service}
              </p>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-neutral-500">
                Lieu de rendez-vous
              </p>
              <div className="flex items-center gap-2">
                {formData.appointmentType === "in-person" ? (
                  <>
                    <Building className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      En présentiel dans nos bureaux
                    </span>
                  </>
                ) : (
                  <>
                    <Video className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      En ligne (Google Meet, Zoom, etc.)
                    </span>
                  </>
                )}
              </div>
            </div>

            <div>
              <p className="mb-1 text-xs sm:text-sm text-neutral-500">Agent</p>
              <div className="flex items-center gap-2">
                {selectedTeamMember && (
                  <>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={selectedTeamMember.avatar}
                        alt={selectedTeamMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm sm:text-base">
                      {selectedTeamMember.name}
                    </span>
                  </>
                )}
                {!selectedTeamMember && (
                  <span className="text-sm sm:text-base">
                    {formData.selectedTeamMember || "Aucun agent sélectionné"}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div>
              <p className="text-xs sm:text-sm text-neutral-500">
                Date et heure
              </p>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  {formData.date
                    ? new Date(formData.date).toLocaleDateString("fr-FR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Date non sélectionnée"}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">{formData.time}</span>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-neutral-500">Coordonnées</p>
              <p className="font-medium text-sm sm:text-base">
                {formData.firstName} {formData.lastName}
              </p>
              <p className="text-sm sm:text-base">{formData.email}</p>
              <p className="text-sm sm:text-base">{formData.phone}</p>
            </div>
          </div>
        </div>

        {formData.message && (
          <div className="mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm text-neutral-500">Message</p>
            <p className="italic text-sm sm:text-base">{formData.message}</p>
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
        <p className="text-xs sm:text-sm">
          En confirmant ce rendez-vous, vous acceptez nos conditions générales.
          Vous recevrez un email de confirmation avec tous les détails.
        </p>
      </div>
    </div>
  );
};
