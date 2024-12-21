const express = require("express");
const { signUp, login } = require("../controllers/user.controller");
const {
    validateLogin,
    validateSignUp,
} = require("../middleware/user.middleware");
const router = express.Router();

router.post("/signup", validateSignUp, signUp);
router.post("/login", validateLogin, login);

module.exports = router;
