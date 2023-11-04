const isEmpty = require("../utils/isEmpty");
const bcrypt = require("bcrypt");

const validateRegisterAdmin = async (
  first_name,
  last_name,
  username,
  email,
  roles,
  passwords,
  confirmPassword
) => {
  const registerAdmin = {};
  const registerAdminError = {};
  const registerAdminValid = {};
  const salt = await bcrypt.genSalt();
  if (isEmpty(first_name)) {
    registerAdminError.first_name = "First name cannot be empty";
    registerAdminValid.first_name_valid = false;
  } else {
    registerAdmin.first_name = first_name;
    registerAdminValid.first_name_valid = true;
  }
  if (isEmpty(last_name)) {
    registerAdminError.last_name = "Last name cannot be empty";
    registerAdminValid.last_name_valid = false;
  } else {
    registerAdmin.last_name = last_name;
    registerAdminValid.last_name_valid = true;
  }
  if (isEmpty(username)) {
    registerAdminError.username = "Username cannot be empty";
    registerAdminValid.username_valid = false;
  } else {
    registerAdmin.username = username;
    registerAdminValid.username_valid = true;
  }
  if (isEmpty(roles)) {
    registerAdminError.roles = "Role cannot be empty";
    registerAdminValid.role_valid = false;
  } else {
    registerAdmin.roles = roles;
    registerAdminValid.role_valid = true;
  }
  if (isEmpty(email)) {
    registerAdminError.email = "Email cannot be empty";
    registerAdminValid.email_valid = false;
  } else {
    registerAdmin.email = email;
    registerAdminValid.email_valid = true;
  }
  if (isEmpty(passwords)) {
    registerAdminError.passwords = "Password cannot be empty";
    registerAdminValid.passwords_valid = false;
  } else {
    registerAdmin.passwords = await bcrypt.hash(passwords, salt);
    registerAdminValid.passwords_valid = true;
  }

  if (passwords !== confirmPassword) {
    registerAdminError.confirmPassword = "Passwords do not match";
    registerAdminValid.confirmPassword_valid = false;
  } else {
    registerAdmin.confirmPassword = confirmPassword;
    registerAdminValid.confirmPassword_valid = true;
  }
  return { registerAdmin, registerAdminValid, registerAdminError };
};

module.exports = validateRegisterAdmin;