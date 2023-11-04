const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.sendStatus(401);
    }
    const admin = await Admin.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!admin[0]) {
      return res.sendStatus(403);
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const adminDetails = {
        admin_id: admin[0].id,
        first_name: admin[0].first_name,
        last_name: admin[0].last_name,
        email: admin[0].email,
        role: admin[0].role,
      };
      const accessToken = jwt.sign(adminDetails, process.env.ACCESS_TOKEN, {
        expiresIn: "15s",
      });
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { refreshToken };
