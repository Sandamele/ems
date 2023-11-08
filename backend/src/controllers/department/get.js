const Department = require("../../models/department");
const getDepartment = async (req, res) => {
  const id = req.params.id;
  try {
    const department = await Department.findByPk(id);
    if (!department) {
      return res.status(403).send({ error: "Department not found" });
    }
    return res.status(200).json({data: department});
  } catch (error) {
    console.log(error);
    return res.status(400).send({error});
  }
};

module.exports = {getDepartment}