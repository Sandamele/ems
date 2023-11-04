const validateEmployeeDetails = require("../../middleware/validateEmployeeDetails");
const Employee = require("../../models/employee");
const updateEmployee = async (req, res) => {
  const employeeId = req.params.id;
  try {
    const employeeValidations = validateEmployeeDetails(req.body);

    const { employeeDetailsValid, employeeDetailsError, employeeDetails} = employeeValidations;
    const isValid = Object.values(employeeDetailsValid).every((valid) => valid);
    if (!isValid) {
      return res.status(400).send({ error: employeeDetailsError });
    }
    const employee = await Employee.findByPk(employeeId);
    if (!employee) {
        return res.status(404).send({ message: "Employee not found." });
    }
    await Employee.update(employeeDetails, {where: {id: employeeId}})
    res.status(200).json({message: "Employee successfully update"});
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Server Error: " + error});
  }
};

module.exports = { updateEmployee };
