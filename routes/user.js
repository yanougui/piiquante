const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const max = require("../middleware/rate-limit");
const validMail = require("../middleware/valid-email");
const validPwd = require("../middleware/valid-password");

router.post("/signup", validMail, validPwd, userController.signup);
router.post("/login", max.limiter, userController.login);

module.exports = router;
