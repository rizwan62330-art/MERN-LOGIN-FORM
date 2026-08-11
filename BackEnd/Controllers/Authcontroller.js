const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require("../Models/user")

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup Successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server Error",
                success: false
            })

    }
}
const login = async (req, res) => {
    try {
        const {email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'User is already exist, you can login';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToke = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '12h' }
        );

        res.status(201)
            .json({
                message: "Login Successfully",
                success: true,
                jwtToke,
                email,
                name: user.name
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server Error",
                success: false
            })

    }
}
module.exports = { signup, login }