const Department = require('../../models/department');
const getAllDepartment = async (req, res) => {
    try {
        const department = await Department.findAll();
        return res.status(200).json({data: department});
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).send(`Server Error ${error}`);
    }
 }

module.exports = {getAllDepartment}