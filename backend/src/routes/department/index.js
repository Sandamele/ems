const { addDepartment } = require("../../controllers/department/add");
const { deleteDepartment } = require("../../controllers/department/delete");
const { editDepartmentName } = require("../../controllers/department/edit");
const { getDepartment } = require("../../controllers/department/get");
const { getAllDepartment } = require("../../controllers/department/getAll");
const { verifyToken } = require("../../middleware/verifyToken");

const router = require("express").Router();
router.post("/add", verifyToken, addDepartment);
router.get("/", verifyToken, getAllDepartment);
router.get('/:id', verifyToken, getDepartment);
router.put("/edit/:id", verifyToken, editDepartmentName);
router.delete("/delete/:id", verifyToken, deleteDepartment);
module.exports = router;
