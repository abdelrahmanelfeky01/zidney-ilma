// Name Validation
export function isValidName(name) {
  const words = name?.trim().split(/\s+/).filter(Boolean);
  if (words?.length < 2) return false;
  return words?.every((word) => word.length >= 2);
}

// Email Validation
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password Validation
export function isLongEnough(password) {
  return password?.length >= 8;
}

export function hasLettersAndNumbers(password) {
  return /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
}

export function isValidPassword(password) {
  return isLongEnough(password) && hasLettersAndNumbers(password);
}
