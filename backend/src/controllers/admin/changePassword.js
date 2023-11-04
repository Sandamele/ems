const Admin = require("../../models/admin");
const bcrypt = require("bcrypt");
const isEmpty = require("../../utils/isEmpty");
const changePassword = async (req, res) => {
  try {
    const adminId = req.params.id;
    const { currentPassword, newPassword, confirmNewPassword } = req.body;
    if (
      isEmpty(currentPassword) ||
      isEmpty(newPassword) ||
      isEmpty(confirmNewPassword)
    ) {
      return res.status(400).json({ error: "Please fill all fields" });
    }
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const admin = await Admin.findByPk(adminId);
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    const passwordMatchCurrentPassword = await bcrypt.compare(
      currentPassword,
      admin.passwords
    );
    if (!passwordMatchCurrentPassword) {
      return res.status(401).send({ error: "Incorrect Password" });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(newPassword, salt);
    await Admin.update({ passwords: hashPassword }, { where: { id: adminId } });
    return res.status(200).json({ message: "Password changed successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error: " + error });
  }
};
module.exports = { changePassword };
