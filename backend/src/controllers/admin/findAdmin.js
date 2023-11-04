const Admin = require("../../models/admin");
const findAdmin = async (req, res) => {
  const adminId = req.params.id;
  try {
    const admin = await Admin.findByPk(adminId, {
      attributes: [
        "id",
        "first_name",
        "last_name",
        "username",
        "email",
        "roles",
      ],
    });
    if (!admin) {
      return res.status(403).json({ error: "Admin not found" });
    }
    return res.status(200).json({ data: admin });
  } catch (error) {
    console.log("Error in finding the admin : ", error);
    return res.status(500).json({ error: error });
  }
};

module.exports = { findAdmin };
