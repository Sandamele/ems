const Admin = require("../../models/admin");
const bcrypt = require("bcrypt");
const isEmpty = require("../../utils/isEmpty");
const changePassword = async (req, res) => {
  try {
    const adminId = req.params.id;
    const {password, confirmPassword } = req.body;
    if (
      isEmpty(password) ||
      isEmpty(confirmPassword)
    ) {
      return res.status(400).json({ error: "Please fill all fields" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const admin = await Admin.findByPk(adminId);
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    await Admin.update({ passwords: hashPassword }, { where: { id: adminId } });
    return res.status(200).json({ message: "Password changed successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error });
  }
};
module.exports = { changePassword };
