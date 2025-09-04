export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  date?: string;
  time?: string;
  appointmentType?: "in-person" | "online";
  teamMember?: string;
}

export interface AppointmentValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  date?: string;
  time?: string;
}

const errorMessages = {
  required: "Ce champ est requis",
  email: "Veuillez saisir une adresse email valide",
  phone: "Le téléphone doit contenir 10 chiffres",
  minLength: (min: number) => `Minimum ${min} caractères requis`,
  maxLength: (max: number) => `Maximum ${max} caractères autorisés`,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateString(
  value: string,
  _fieldName: string,
  min?: number,
  max?: number,
  required: boolean = true
): string | undefined {
  const trimmedValue = value.trim();

  if (required && !trimmedValue) {
    return errorMessages.required;
  }

  if (trimmedValue && min && trimmedValue.length < min) {
    return errorMessages.minLength(min);
  }

  if (trimmedValue && max && trimmedValue.length > max) {
    return errorMessages.maxLength(max);
  }

  return undefined;
}

/**
 * Valide une adresse email
 */
function validateEmail(email: string): string | undefined {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    return errorMessages.required;
  }

  if (!emailRegex.test(trimmedEmail)) {
    return errorMessages.email;
  }

  if (trimmedEmail.length > 100) {
    return errorMessages.maxLength(100);
  }

  return undefined;
}

/**
 * Valide un numéro de téléphone
 * Vérifie qu'il contient exactement 10 chiffres
 */
function validatePhone(phone: string): string | undefined {
  const trimmedPhone = phone.trim();

  if (!trimmedPhone) {
    return errorMessages.required;
  }

  // Extraire seulement les chiffres
  const digitsOnly = trimmedPhone.replace(/\D/g, "");

  // Vérifier qu'il y a exactement 10 chiffres
  if (digitsOnly.length !== 10) {
    return errorMessages.phone;
  }

  return undefined;
}

/**
 * Validation spécifique pour l'étape des informations personnelles
 */
export function validatePersonalInfo(
  data: AppointmentFormData
): AppointmentValidationErrors {
  const errors: AppointmentValidationErrors = {};

  // Validation firstName
  const firstNameError = validateString(data.firstName, "firstName", 2, 50);
  if (firstNameError) errors.firstName = firstNameError;

  // Validation lastName
  const lastNameError = validateString(data.lastName, "lastName", 2, 50);
  if (lastNameError) errors.lastName = lastNameError;

  // Validation email
  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  // Validation phone (requis pour les RDV)
  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  // Validation service
  const serviceError = validateString(data.service, "service", 1);
  if (serviceError) errors.service = serviceError;

  // Validation message (optionnel)
  if (data.message) {
    const messageError = validateString(
      data.message,
      "message",
      0,
      1000,
      false
    );
    if (messageError) errors.message = messageError;
  }

  return errors;
}

/**
 * Vérifie si il y a des erreurs de validation
 */
export function hasValidationErrors(
  errors: AppointmentValidationErrors
): boolean {
  return Object.keys(errors).length > 0;
}

/**
 * Nettoie et normalise les données du formulaire
 */
export function sanitizeAppointmentData(
  data: AppointmentFormData
): AppointmentFormData {
  return {
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    service: data.service.trim(),
    message: data.message?.trim() || "",
    date: data.date,
    time: data.time,
    appointmentType: data.appointmentType,
    teamMember: data.teamMember,
  };
}
