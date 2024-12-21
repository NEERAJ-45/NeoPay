const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const upi_id = "upi-" + name + Math.random().toString(36).substr(2, 9);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            upi_id,
        });
        await user.save();
        return res.json({
            message: "user created successfully",
            username: user.name,
            email: user.email,
        });
    } catch (err) {
        console.log("Usercontroller service :: signUp :: error : ", err);
        res.status(400).send(err);
    }
};

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            "secret",
            { expiresIn: "1h" }
        );

        res.cookie("token", token);

        return res.json({
            message: "Login successful",
            username: user.name,
            email: user.email,
            token,
        });
    } catch (err) {
        console.log("Usercontroller service :: login :: error : ", err);
        res.status(400).send(err);
    }
};

module.exports = {
    signUp,
    login,
};
