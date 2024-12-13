const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");

router.post("/auth/register", auth.postUser);
router.post("/auth/login", auth.loginUser);
router.get("/users", auth.getAllUser);
router.get("/users/:id", auth.getUserById);
router.post("/users/vouchers", auth.addVoucher);
router.get("/user/:user_id/vouchers", auth.getListVouchers)

module.exports = router;