const validateDepartment = require("../../middleware/validateDepartment");
const Department = require("../../models/department");
const editDepartmentName = async (req, res) => {
  const departmentId = req.params.id;
  try {
    const departmentValidation = validateDepartment(req.body);
    const {
      departmnetDetails,
      departmnetDetailsError,
      departmnetDetailsValid,
    } = departmentValidation;
    const isValid = Object.values(departmnetDetailsValid).every(
      (valid) => valid
    );

    if (!isValid) {
      return res.status(400).send({ error: departmnetDetailsError });
    }
    const department = await Department.findByPk(departmentId);
    if (!department) {
      return res.status(403).send({ error: "Not found" });
    }
    await department.update(departmnetDetails);
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    console.log("Error", error);
    res.status(400).send({ error: error });
  }
};

module.exports = { editDepartmentName };
