const Admin = require('../../models/admin');
const checkAdminTableIsEmpty = async (req, res) => {
    try {
        const totalAdmins = await Admin.count();
        if(totalAdmins > 0) {
            return res.status(200).json({data: false})
        }else{
            return res.status(200).json({data: true})
        }
    } catch (error) {
        console.log("Error in checking admin table is empty or not", error);
        return res.status(500).send({msg: "Internal Server Error"});
    }
}

module.exports = {checkAdminTableIsEmpty}