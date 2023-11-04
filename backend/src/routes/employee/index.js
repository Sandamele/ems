const router = require("express").Router();
const { addEmployee,  } = require("../../controllers/employee/add");
const { deleteEmployee } = require("../../controllers/employee/delete");
const { findEmployee } = require("../../controllers/employee/findEmployee");
const { getAllEmployee } = require("../../controllers/employee/listAll");
const { updateEmployee } = require("../../controllers/employee/update");

router.post("/add", addEmployee);
router.get("/find", getAllEmployee);
router.get("/:id", findEmployee)
router.delete("/delete/:id", deleteEmployee);
router.put('/update/:id', updateEmployee);
module.exports = router;
