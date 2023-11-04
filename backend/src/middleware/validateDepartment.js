const isEmpty = require("../utils/isEmpty");

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
