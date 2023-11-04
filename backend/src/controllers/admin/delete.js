const Admin = require("../../models/admin");
const deleteAdmin = async (req, res) => {
  const { id, adminRole } = req.params;
  if (adminRole !== "super admin") {
    return res
      .status(401)
      .json({ error: "Only super admin can delete admins" });
  }
  try {
    const admin = await Admin.findByPk(id);
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    await admin.destroy();
    res.send(200).send({message: "Admin deleted"});
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error deleting the admin" });
  }
};

module.exports = { deleteAdmin };
