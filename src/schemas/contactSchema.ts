export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
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
 * Valide un numéro de téléphone (optionnel)
 * Vérifie seulement qu'il contient 10 chiffres si rempli
 */
function validatePhone(phone: string): string | undefined {
  const trimmedPhone = phone.trim();

  // Le téléphone est optionnel
  if (!trimmedPhone) {
    return undefined;
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
 * Fonction de validation du formulaire de contact
 */
export function validateContactForm(data: ContactFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  // Validation firstName
  const firstNameError = validateString(data.firstName, "firstName", 2, 50);
  if (firstNameError) errors.firstName = firstNameError;

  // Validation lastName
  const lastNameError = validateString(data.lastName, "lastName", 2, 50);
  if (lastNameError) errors.lastName = lastNameError;

  // Validation email
  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  // Validation phone (optionnel)
  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  // Validation subject
  const subjectError = validateString(data.subject, "subject", 1);
  if (subjectError) errors.subject = subjectError;

  // Validation message
  const messageError = validateString(data.message, "message", 10, 1000);
  if (messageError) errors.message = messageError;

  return errors;
}

/**
 * Vérifie si il y a des erreurs de validation
 */
export function hasValidationErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}

/**
 * Nettoie et normalise les données du formulaire
 */
export function sanitizeContactFormData(
  data: ContactFormData
): ContactFormData {
  return {
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    subject: data.subject.trim(),
    message: data.message.trim(),
  };
}
