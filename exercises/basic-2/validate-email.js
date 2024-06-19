// function validateEmail(email) {
//   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//   return emailRegex.test(email);
// }

function validateEmail(str) {
  if (str.indexOf('@') === -1) return false;

  const [localPart, domain] = str.split('@');

  if (localPart.length === 0 || domain.length < 3) return false;

  const domainExtension = domain.split('.');

  if (domainExtension.length < 2 || domainExtension[1].length < 2) return false;

  return true;
}

module.exports = validateEmail;
