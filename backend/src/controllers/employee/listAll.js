const Employee = require('../../models/employee');
const getAllEmployee = async (req, res) => {
    try{
        const employee = await Employee.findAll();
        res.status(200).json({data: employee});
    }catch(error){
        console.log("Error: ", error);
        res.status(500).send("Server Error");
    }
}

module.exports = {getAllEmployee}