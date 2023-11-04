const Admin = require("../../models/admin");
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll({
      attributes: [
        "id",
        "first_name",
        "last_name",
        "username",
        "email",
        "roles",
      ],
    });
    res.json({data:admins});
  } catch (error) {
    res.sendStatus(404).json({error: error});
  }
};

module.exports = {getAllAdmins}