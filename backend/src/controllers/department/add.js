const validateDepartment = require("../../middleware/validateDepartment");
const Department = require("../../models/department");
const addDepartment = async (req, res) => {
  try {
    const departmentValidation = validateDepartment(req.body);
    const {departmnetDetails, departmnetDetailsError, departmnetDetailsValid} = departmentValidation;
    const isValid = Object.values(departmnetDetailsValid).every((valid) => valid);

    if (!isValid) {
      return res.status(400).send({ error: departmnetDetailsError });
    }
    await Department.create(departmnetDetails)
    res.status(200).json({ message: `${departmnetDetails.name} added` });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
};

module.exports = {addDepartment}
