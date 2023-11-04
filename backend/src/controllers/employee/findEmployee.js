const Employee = require("../../models/employee");
const findEmployee = async (req, res) => {
  const employeeId = req.params.id;
  try {
    const emplyee = await Employee.findByPk(employeeId);
    if (!emplyee) {
      return res.status(400).json({ message: "Employee not found." });
    }
    res.json({data: emplyee});
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {findEmployee}