// DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

JavaScript:
validatePIN = pin => /^([0-9]{4}|[0-9]{6})$/.test(pin)



function validatePIN (pin) {
  return /^([0-9]{4}|[0-9]{6})$/.test(pin)
}



function validatePIN(pin) {
var isNumber = /^\d+$/.test(pin) && (pin.length == 4 || pin.length == 6)
return isNumber
}