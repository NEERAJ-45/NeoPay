const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log("Received signup request for email:", email);
        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log("User already exists:", email);
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
        console.log("User created successfully:", email);
        return res.json({
            message: "User created successfully",
            username: user.name,
            email: user.email,
        });
    } catch (err) {
        console.log("Error during signup:", err);
        res.status(400).send(err);
    }
};

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Received login request for email:", email);
        const user = await User.findOne({ email });
        if (!user) {
            console.log("User not found:", email);
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Invalid credentials for email:", email);
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            "secret",
            { expiresIn: "1h" }
        );

        res.cookie("token", token);
        console.log("Login successful for email:", email);

        return res.json({
            message: "Login successful",
            username: user.name,
            email: user.email,
            token,
        });
    } catch (err) {
        console.log("Error during login:", err);
        res.status(400).send(err);
    }
};

module.exports = {
    signUp,
    login,
};