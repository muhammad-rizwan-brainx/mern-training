const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateLoginCredentials = (data) => {
  const { email, password } = data;
  const errors = [];
  if (!email || email.trim() === "") {
    errors.push("Email is required");
  } else if (!isValidEmail(email)) {
    errors.push("Email is invalid");
  }
  if (!password || password.trim() === "") {
    errors.push("Password is required");
  }
  return errors;
};

const validateForgotPasswordCredentials = (data) => {
  const { email } = data;
  const errors = [];
  if (!email || email.trim() === "") {
    errors.push("Email is required");
  } else if (!isValidEmail(email)) {
    errors.push("Email is invalid");
  }
  return errors;
};

module.exports = {
  validateForgotPasswordCredentials,
  isValidEmail,
  validateLoginCredentials,
};
