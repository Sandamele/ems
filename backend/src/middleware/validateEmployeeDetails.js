const isEmpty = require("../utils/isEmpty");
/**
 * Validates employee details to ensure required fields are provided and sets validation flags and error messages.
 *
 * @param {object} details - An object containing employee details to be validated.
 * @param {string} details.first_name - The first name of the employee.
 * @param {string} details.last_name - The last name of the employee.
 * @param {string} details.email - The email address of the employee.
 * @param {string} details.gender - The gender of the employee.
 * @param {string} details.phone_number - The phone number of the employee.
 * @param {string} details.employee_code - The employee code.
 * @param {string} details.position - The position of the employee.
 * @param {string} details.department - The department of the employee.
 * @param {string} details.address_street - The street address of the employee.
 * @param {string} details.address_city - The city of the employee.
 * @param {string} details.address_province - The province of the employee.
 * @param {string} details.address_postal_code - The postal code of the employee.
 * @param {string} details.address_country - The country of the employee.
 * @returns {object} An object containing the validated employee details, validation flags, and error messages.
 */
const validateEmployeeDetails = (details) => {
  const employeeDetails = {};
  const employeeDetailsError = {};
  const employeeDetailsValid = {};
  
  const fieldsToValidate = [
    { field: "first_name", label: "First name" },
    { field: "last_name", label: "Last name" },
    { field: "email", label: "Email" },
    { field: "gender", label: "Gender" },
    { field: "phone_number", label: "Phone number" },
    { field: "employee_code", label: "Employee code" },
    { field: "position", label: "Position" },
    { field: "department", label: "Department" },
    { field: "address_street", label: "Street address" },
    { field: "address_city", label: "City" },
    { field: "address_province", label: "Province" },
    { field: "address_postal_code", label: "Postal code" },
    { field: "address_country", label: "Country" },
  ];

  fieldsToValidate.forEach(({ field, label }) => {
    const value = details[field];
    const errorField = `${field}_valid`;

    if (isEmpty(value)) {
      employeeDetailsError[field] = `${label} cannot be empty`;
      employeeDetailsValid[errorField] = false;
    } else {
      employeeDetails[field] = value;
      employeeDetailsValid[errorField] = true;
    }
  });

  return { employeeDetailsError, employeeDetailsValid, employeeDetails };
};

module.exports = validateEmployeeDetails;
