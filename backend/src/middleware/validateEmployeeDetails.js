const isEmpty = require("../utils/isEmpty");
const validateEmployeeDetails = (details) => {
    const employeeDetails = {};
    const employeeDetailsError = {};
    const employeeDetailsValid = {};
    const fieldsToValidate = [
        { field: 'first_name', label: 'First name' },
        { field: 'last_name', label: 'Last name' },
        { field: 'email', label: 'Email' },
        { field: 'gender', label: 'Gender' },
        { field: 'phone_number', label: 'Phone number' },
        { field: 'employee_code', label: 'Employee code' },
        { field: 'position', label: 'Position' },
        { field: 'department', label: 'Department' },
        { field: 'address_street', label: 'Street address' },
        { field: 'address_city', label: 'City' },
        { field: 'address_province', label: 'Province' },
        { field: 'address_postal_code', label: 'Postal code' },
        { field: 'address_country', label: 'Country' },
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

      return {employeeDetailsError , employeeDetailsValid, employeeDetails}
}

module.exports = validateEmployeeDetails