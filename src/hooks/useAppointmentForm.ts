import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { EmailService, type EmailData } from "../services/emailService";
import { teamMembers } from "../data/teams";
import {
  AppointmentFormData,
  validatePersonalInfo,
  hasValidationErrors,
} from "../schemas/appointmentSchema";

export type AppointmentType = "in-person" | "online";
export type TeamMember = (typeof teamMembers)[0];

export interface CompleteAppointmentFormData extends AppointmentFormData {
  selectedTeamMember: string;
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

  // React Hook Form configuration
  const form = useForm<CompleteAppointmentFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: initialService,
      message: "",
      date: "",
      time: "",
      appointmentType: "in-person",
      selectedTeamMember: "",
    },
    mode: "onBlur",
  });

  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit: rhfHandleSubmit,
  } = form;

  const watchedValues = watch();

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Available time slots based on date
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  // Créneaux de 9h à 17h (constante memoized)
  // Memoization pour éviter de recalculer les créneaux à chaque changement de date
  const baseSlots = useMemo(
    () => [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ],
    []
  );

  // Update available time slots when date changes
  useEffect(() => {
    const currentDate = watchedValues.date;
    if (!currentDate) return;

    const selectedDate = new Date(currentDate);
    const day = selectedDate.getDay();

    // Vérifier si c'est un jour de semaine (1-5 = Lundi-Vendredi)
    if (day >= 1 && day <= 5) {
      setAvailableTimeSlots(baseSlots);
    } else {
      // Si c'est le weekend, aucun créneau disponible
      setAvailableTimeSlots([]);
    }
  }, [watchedValues.date, baseSlots]);

  // Gérer la réinitialisation du time sélectionné
  useEffect(() => {
    const currentDate = watchedValues.date;
    const currentTime = watchedValues.time;

    if (!currentDate || !currentTime) return;

    const selectedDate = new Date(currentDate);
    const day = selectedDate.getDay();
    const isWeekday = day >= 1 && day <= 5;

    if (!isWeekday || !baseSlots.includes(currentTime)) {
      setValue("time", "");
    }
  }, [watchedValues.date, watchedValues.time, setValue, baseSlots]);

  // Handlers simplifiés avec React Hook Form
  const handleAppointmentTypeChange = (type: AppointmentType) => {
    setValue("appointmentType", type);
  };

  const handleTeamMemberSelect = (member: TeamMember) => {
    setValue("selectedTeamMember", member.name);
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
      case 1: {
        // Personal info - validation avec React Hook Form
        const personalInfoErrors = validatePersonalInfo({
          firstName: watchedValues.firstName || "",
          lastName: watchedValues.lastName || "",
          email: watchedValues.email || "",
          phone: watchedValues.phone || "",
          service: watchedValues.service || "",
          message: watchedValues.message || "",
        });
        return !hasValidationErrors(personalInfoErrors);
      }
      case 2: // Appointment type
        return !!watchedValues.appointmentType;
      case 3: // Team member selection
        return !!watchedValues.selectedTeamMember;
      case 4: // Date and time
        return !!watchedValues.date && !!watchedValues.time;
      default:
        return true;
    }
  };

  // Handle form submission avec React Hook Form
  const handleSubmit = rhfHandleSubmit(async (data) => {
    setIsSubmitting(true);
    setError("");

    try {
      const emailService = EmailService.getInstance();

      // Prepare email data with all form fields from React Hook Form
      const emailData: EmailData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message || "",
        date: data.date || "",
        time: data.time || "",
        teamMember: data.selectedTeamMember || "",
        appointmentType: data.appointmentType || "in-person",
      };

      // Send admin notification
      const adminEmailSent = await emailService.sendAdminNotification(
        emailData
      );

      // Send client confirmation
      // const clientEmailSent = await emailService.sendClientConfirmation(emailData);

      if (adminEmailSent) {
        setIsSuccess(true);

        // Reset form and close modal after 3 seconds
        setTimeout(() => {
          form.reset({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            service: initialService,
            message: "",
            date: "",
            time: "",
            appointmentType: "in-person",
            selectedTeamMember: "",
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
  });

  return {
    currentStep,
    isSubmitting,
    isSuccess,
    error,
    availableTimeSlots,
    goToNextStep,
    goToPreviousStep,
    canProceedToNextStep,
    handleSubmit,
    teamMembers,

    // React Hook Form
    register,
    errors,
    watch: watchedValues,

    // Handlers
    handleAppointmentTypeChange,
    handleTeamMemberSelect,

    // Validation et navigation
    validateAndGoNext: () => {
      const personalInfoData = {
        firstName: watchedValues.firstName || "",
        lastName: watchedValues.lastName || "",
        email: watchedValues.email || "",
        phone: watchedValues.phone || "",
        service: watchedValues.service || "",
        message: watchedValues.message || "",
      };

      const validationErrors = validatePersonalInfo(personalInfoData);

      if (hasValidationErrors(validationErrors)) {
        Object.entries(validationErrors).forEach(([field, message]) => {
          form.setError(field as keyof AppointmentFormData, {
            type: "manual",
            message: message,
          });
        });
        return false;
      }

      goToNextStep();
      return true;
    },
  };
};
