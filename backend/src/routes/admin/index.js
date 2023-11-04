const router = require("express").Router();
const { register } = require("../../controllers/admin/register");
const { login } = require("../../controllers/admin/login");
const { logout } = require("../../controllers/admin/logout");
const { getAllAdmins } = require("../../controllers/admin/listAdmin");
const { refreshToken } = require("../../middleware/refreshToken");
const { verifyToken } = require("../../middleware/verifyToken");
const { editAdmin } = require("../../controllers/admin/edit");
const { changePassword } = require("../../controllers/admin/changePassword");
const { deleteAdmin } = require("../../controllers/admin/delete");
const { findAdmin } = require("../../controllers/admin/findAdmin");

router.post("/register", register);
router.post("/login", login);
router.get("/find", verifyToken, getAllAdmins);
router.get("/token", refreshToken);
router.get("/edit/:id/:adminRole", verifyToken, editAdmin);
router.get("/:id", verifyToken ,findAdmin);
router.delete("/logout", logout);
router.delete("/delete/:id/:adminRole", verifyToken, deleteAdmin);
router.put("/change_password/:id", verifyToken,changePassword);

module.exports = router;
