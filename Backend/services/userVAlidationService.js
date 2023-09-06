exports.validateSignup = (req) => {
    const { userName, email, password } = req.body;
    const errors = [];
  
    if (!userName || userName.trim() === "") {
      errors.push("Username is required");
    }
  
    if (!email || email.trim() === "") {
      errors.push("Email is required");
    } else if (!isValidEmail(email)) {
      errors.push("Email is invalid");
    }
  
    if (!password || password.trim() === "") {
      errors.push("Password is required");
    } else if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }
  
    return errors;
  };
  
  exports.validateLogin = (req) => {
    const { email, password } = req.body;
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
  
  exports.validateForgotPassword = (req) => {
    const { email } = req.body;
    const errors = [];
  
    if (!email || email.trim() === "") {
      errors.push("Email is required");
    } else if (!isValidEmail(email)) {
      errors.push("Email is invalid");
    }
  
    return errors;
  };

  const     isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };