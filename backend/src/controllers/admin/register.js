const validateRegisterAdmin = require('../../middleware/validationRegisterAdmin');
const Admin = require('../../models/admin');
const register = async(req, res) => {
  const {first_name, last_name, username, email, roles, passwords, confirmPassword} = req.body;
    try {
      const registerValidation = await validateRegisterAdmin(first_name, last_name, username, email, roles, passwords, confirmPassword);
      const {registerAdmin, registerAdminValid, registerAdminError} = registerValidation;
      const isValid = Object.values(registerAdminValid).every((valid) => valid);
      if (!isValid) {
        return res.status(400).send({ errors: registerAdminError });
      }
      await Admin.create(registerAdmin);
      res.status(200).json({ message: "Admin registered"});
    } catch (error) {
      console.log(error)
      res.status(400).json({error});
    }
}

module.exports = {register}