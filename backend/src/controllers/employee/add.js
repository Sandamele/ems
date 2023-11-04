const Employee = require("../../models/employee");
const validateEmployeeDetails = require("../../middleware/validateEmployeeDetails");
const addEmployee = async (req, res) => {
  try {
    const employeeValidations = validateEmployeeDetails(req.body);
    const { employeeDetailsValid, employeeDetailsError, employeeDetails} = employeeValidations;
    const isValid = Object.values(employeeDetailsValid).every((valid) => valid);

    if (!isValid) {
      return res.status(400).send({ error: employeeDetailsError });
    }
    const addEmployee = await Employee.create(employeeDetails);
    return res.json({message: "Employee added successfully", data: addEmployee});
  } catch (error) {
   try {
    console.log(error)
    return res.status(400).json({error: error});
   } catch (error) {
    
   }
  }
};

module.exports = { addEmployee };
