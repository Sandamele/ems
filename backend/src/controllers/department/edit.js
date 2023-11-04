const Department = require('../../models/department');
const editDepartmentName = async (req, res) => {
    const departmentId = req.params.id;
    try {
        const department = Department.findByPk(departmentId);
        if(!department) {
            return res.status(403).send({error: "Not found"});
        }
        await department.update({name: req.body.name});
        res.status(200).json({message: 'Updated successfully'});
    } catch (error) {
        console.log("Error", error);
        res.status(500).send({error: 'Internal Server Error'})
    }
}

module.exports = {editDepartmentName}