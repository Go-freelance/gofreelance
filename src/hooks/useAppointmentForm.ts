import { useState, useEffect } from "react";
import { EmailService, type EmailData } from "../services/emailService";
import { teamMembers } from "../data/teams";

export type AppointmentType = "in-person" | "online";
export type TeamMember = (typeof teamMembers)[0];

export interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
  service: string;
  appointmentType: AppointmentType;
  selectedTeamMember: TeamMember | null;
}

interface UseAppointmentFormProps {
  initialService?: string;
  onClose: () => void;
}

export const useAppointmentForm = ({
  initialService = "",
  onClose,
}: UseAppointmentFormProps) => {
  // Current step in the booking process
  const [currentStep, setCurrentStep] = useState(1);

  // Form data state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
    service: initialService,
    appointmentType: "in-person",
    selectedTeamMember: null,
  });

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Available time slots based on date
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  // Update available time slots when date changes
  useEffect(() => {
    if (!formData.date) return;

    const selectedDate = new Date(formData.date);
    const day = selectedDate.getDay();

    // Vérifier si c'est un jour de semaine (1-5 = Lundi-Vendredi)
    if (day >= 1 && day <= 5) {
      // Créneaux de 9h à 17h
      const baseSlots = [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
      ];
      setAvailableTimeSlots(baseSlots);
    } else {
      // Si c'est le weekend, aucun créneau disponible
      setAvailableTimeSlots([]);
    }
  }, [formData.date, formData.selectedTeamMember]);

  // Gérer la réinitialisation du time sélectionné
  useEffect(() => {
    if (!formData.date || !formData.time) return;

    const selectedDate = new Date(formData.date);
    const day = selectedDate.getDay();
    const isWeekday = day >= 1 && day <= 5;
    const baseSlots = [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ];

    if (!isWeekday || !baseSlots.includes(formData.time)) {
      setFormData((prev) => ({ ...prev, time: "" }));
    }
  }, [formData.date, formData.time]);

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle appointment type selection
  const handleAppointmentTypeChange = (type: AppointmentType) => {
    setFormData((prev) => ({ ...prev, appointmentType: type }));
  };

  // Handle team member selection
  const handleTeamMemberSelect = (member: TeamMember) => {
    setFormData((prev) => ({ ...prev, selectedTeamMember: member }));
  };

  // Navigate to next step
  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Navigate to previous step
  const goToPreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Check if current step is valid and can proceed
  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1: // Personal info
        return (
          formData.name && formData.email && formData.phone && formData.service
        );
      case 2: // Appointment type
        return formData.appointmentType !== null;
      case 3: // Team member selection
        return formData.selectedTeamMember !== null;
      case 4: // Date and time
        return formData.date && formData.time;
      default:
        return true;
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const emailService = EmailService.getInstance();

      // Prepare email data with all form fields
      const emailData: EmailData = {
        ...formData,
        teamMember: formData.selectedTeamMember?.name || "",
        appointmentType: formData.appointmentType,
      } as EmailData;

      // Send admin notification
      const adminEmailSent = await emailService.sendAdminNotification(
        emailData
      );

      // Send client confirmation
      // const clientEmailSent = await emailService.sendClientConfirmation(
      //   emailData
      // );

      if (adminEmailSent) {
        setIsSuccess(true);

        // Reset form and close modal after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            message: "",
            service: initialService,
            appointmentType: "in-person",
            selectedTeamMember: null,
          });
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        setError(
          "Une erreur est survenue lors de l'envoi des emails. Veuillez réessayer."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
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
  };
};
