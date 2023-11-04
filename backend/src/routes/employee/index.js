const router = require("express").Router();
const { addEmployee } = require("../../controllers/employee/add");
const { deleteEmployee } = require("../../controllers/employee/delete");
const { findEmployee } = require("../../controllers/employee/findEmployee");
const { getAllEmployee } = require("../../controllers/employee/listAll");
const { updateEmployee } = require("../../controllers/employee/update");
const { verifyToken } = require("../../middleware/verifyToken");

router.post("/add", verifyToken, addEmployee);
router.get("/", verifyToken, getAllEmployee);
router.get("/:id", verifyToken, findEmployee);
router.delete("/delete/:id", verifyToken, deleteEmployee);
router.put("/update/:id", verifyToken, updateEmployee);
module.exports = router;
