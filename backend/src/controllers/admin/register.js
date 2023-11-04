const Admin = require('../../models/admin');
const bcrypt = require('bcrypt');

const register = async(req, res) => {
    const {first_name, last_name, username, email, roles, passwords, confirmPassword} = req.body;
    if(passwords !== confirmPassword){
        return res.status(400).json({message: "Passwords do not match"});
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(passwords, salt);
    try {
      await Admin.create({
        first_name,
        last_name,
        username,
        email,
        roles,
        passwords: hashPassword,
      });
      res.status(200).json({ message: "Admin registered"});
    } catch (error) {
      res.status(400).json({error: error.errors[0].message});
    }
}

module.exports = {register}