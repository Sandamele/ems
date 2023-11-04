const Admin = require("../../models/admin");
const editAdmin = async (req, res) => {
  const { id, adminRole } = req.params.adminRole;
  if (adminRole !== "super admin") {
    return res.status(401).json({ error: "Only super admin can edit admins" });
  }
  const { first_name, last_name, username, roles } = req.body;
  try {
    const admin = await Admin.findByPk(id);
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    const updateFields = {};
    if (first_name) {
      updateFields.first_name = first_name;
    }
    if (last_name) {
      updateFields.last_name = last_name;
    }
    if (username) {
      updateFields.username = username;
    }
    if (roles) {
      updateFields.roles = roles;
    }
    await Admin.update(
      { first_name, last_name, username, roles },
      { where: { id } }
    );
    res.status(200).json({ message: "Edited successfully" });
  } catch (error) {
    res.sendStatus(404);
  }
};

module.exports = { editAdmin };
