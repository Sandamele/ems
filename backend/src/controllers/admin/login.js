const Admin = require("../../models/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const {email, passwords} = req.body;
  try {
    const admin = await Admin.findAll({
      where: {
        email,
      },
    });
    const passwordMatch = await bcrypt.compare(passwords, admin[0].passwords);
    if (!passwordMatch) {
      return res.status(401).json({error: "Email or password is invalid"});
    }
    const adminDetails = {
      admin_id: admin[0].id,
      first_name: admin[0].first_name,
      last_name: admin[0].last_name,
      email: admin[0].email,
      roles: admin[0].roles,
    };
    const accessToken = jwt.sign(adminDetails, process.env.ACCESS_TOKEN, {
      expiresIn: "1d",
    });
    const refreshToken = jwt.sign(adminDetails, process.env.REFRESH_TOKEN, {
      expiresIn: "1d",
    });
    await Admin.update({refresh_token: refreshToken}, {
        where: {
            id: adminDetails.admin_id
        }
    })
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    })
    res.status(200).json({data: accessToken});
  } catch (error) {
    console.log(error)
    res.status(404).json({error:"Email or password is invalid"});
  }
};
module.exports = {login}