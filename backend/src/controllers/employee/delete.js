const Employee = require("../../models/employee");
const deleteEmployee = async (req, res) => {
  const employeeId = req.params.id;
  try {
    const employee = Employee.findByPk(employeeId);
    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }
    await employee.destroy();
    return res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {deleteEmployee};