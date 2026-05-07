const validateUser = (data) => {
  const errors = {};

  // First Name
  if (!data.firstName || data.firstName.trim() === "") {
    errors.firstName = "First name is required";
  }

  // Last Name
  if (!data.lastName || data.lastName.trim() === "") {
    errors.lastName = "Last name is required";
  }

  // Email
  if (!data.email || data.email.trim() === "") {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email format";
    }
  }

  // Mobile
  if (!data.mobile || data.mobile.trim() === "") {
    errors.mobile = "Mobile number is required";
  } else {
    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(data.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }
  }

  // Gender
  if (!data.gender || data.gender.trim() === "") {
    errors.gender = "Gender is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

module.exports = validateUser;