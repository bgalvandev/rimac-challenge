export const isValidDocumentNumber = (number: string): boolean => {
  const numericPattern = /^[0-9]+$/; // Solo números
  return numericPattern.test(number) && number.length >= 8;
};

export const isValidCellphone = (number: string): boolean => {
  const numericPattern = /^[0-9]+$/; // Solo números
  return numericPattern.test(number) && number.length >= 9;
};

export const arePoliciesAccepted = (
  privacyAccepted: boolean,
  communicationAccepted: boolean
): boolean => {
  return privacyAccepted && communicationAccepted;
};

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateForm = (
  documentNumber: string,
  cellphone: string,
  privacyAccepted: boolean,
  communicationAccepted: boolean
): ValidationResult => {
  const errors: string[] = [];

  if (!isValidDocumentNumber(documentNumber)) {
    errors.push("Por favor ingresa un número de documento válido.");
  } else if (!isValidCellphone(cellphone)) {
    errors.push("Por favor ingresa un número de celular válido.");
  } else if (!arePoliciesAccepted(privacyAccepted, communicationAccepted)) {
    errors.push("Por favor acepta las políticas.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
