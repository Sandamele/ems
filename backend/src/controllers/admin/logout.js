const Admin = require("../../models/admin");
const logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) { 
        return res.sendStatus(204);
    }
    const admin = await Admin.findAll({
        where: {
            refresh_token: refreshToken
        }
    })
    if(admin[0]){
        return res.sendStatus(204);
    }
    const adminId = admin[0].id;
    await Admin.update({refreshToken: null}, {
        where: {
            id: adminId
        }
    })
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

module.exports = {logout};