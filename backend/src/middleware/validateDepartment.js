const isEmpty = require("../utils/isEmpty");

/**
 * Validates department details to ensure required fields are provided and sets validation flags and error messages.
 *
 * @param {object} details - An object containing department details to be validated.
 * @param {string} details.name - The name of the department.
 * @param {string} details.manager - The manager of the department.
 * @returns {object} An object containing the validated department details, validation flags, and error messages.
 */
const validateDepartment = (details) => {
  const departmnetDetails = {};
  const departmnetDetailsError = {};
  const departmnetDetailsValid = {};
  const fieldsToValidate = [
    {
      field: "name",
      label: "Department name",
    },
    {
      field: "manager",
      label: "Manager",
    },
  ];

  fieldsToValidate.forEach(({ field, label }) => {
    const value = details[field];
    const errorField = `${field}_valid`;
    if (isEmpty(value)) {
      departmnetDetailsError[field] = `Please provide ${label}`;
      departmnetDetailsValid[errorField] = false;
    } else {
      departmnetDetailsValid[errorField] = true;
      departmnetDetails[field] = value;
    }
  });

  return { departmnetDetails, departmnetDetailsError, departmnetDetailsValid };
};

module.exports = validateDepartment;
