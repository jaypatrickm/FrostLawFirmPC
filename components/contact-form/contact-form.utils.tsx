export function validateFullName(fullName: string) {
  const fullNameRegex = /[a-z0-9`'!&.]\s[a-z0-91'!&.]/g;
  return fullNameRegex.test(fullName) && fullName.length > 0;
}

//TODO: City regex is too simple?...
export function validateCity(city: string) {
  const cityRegex = /[a-z]/g;
  return cityRegex.test(city) && city.length > 0;
}

export function validateEmail(email: string) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

export function validateIsPhone(phoneNumber: string) {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phoneNumber);
}
