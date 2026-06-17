export function isLongEnough(password) {
  return password.length >= 8;
}

export function hasLettersAndNumbers(password) {
  return /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
}

export function isPasswordValid(password) {
  return isLongEnough(password) && hasLettersAndNumbers(password);
}