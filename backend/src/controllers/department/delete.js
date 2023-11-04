const Department = require('../../models/department');
const deleteDepartment = async (req, res) => {
    const departmentId = req.params.id;
    try {
        const department = await Department.findByPk(departmentId);
        if(!department){
            return res.status(403).json({error: "No such department exists"})
        }
        department.destroy();
        return res.status(201).json({message: "Successfully deleted the department"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error});
    }
}


module.exports = {deleteDepartment}