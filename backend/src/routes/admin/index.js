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
const { checkAdminTableIsEmpty } = require("../../controllers/admin/checkAdminTableIsEmpty");

router.post("/register", register);
router.post("/login", login);
router.get("/find", verifyToken, getAllAdmins);
router.get("/token", refreshToken);
router.get("/findOne/:id", verifyToken ,findAdmin);
router.get('/adminEmpty', checkAdminTableIsEmpty);
router.delete("/logout", logout);
router.delete("/delete/:id/:adminRole", verifyToken, deleteAdmin);
router.put("/change_password/:id", verifyToken,changePassword);
router.put("/edit/:id/:adminRole", verifyToken, editAdmin);



module.exports = router;
