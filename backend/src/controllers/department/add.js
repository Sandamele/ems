const Department = require("../../models/department");
const addDepartment = async (req, res) => {
  const { name } = req.body;
  try {
    await Department.create({ name });
    res.status(200).json({ message: `${name} added` });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
};

module.exports = {addDepartment}
