const jwt = require('jsonwebtoken');
const Admin = require('../models/User'); // Ensure this path is correct
const bcrypt = require('bcryptjs');

exports.signInToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            username: user.username
        },
        process.env.JWT_SECRET,
        { expiresIn: '2d' }
    );
};

exports.tokenForVerify = (user) => {
    return jwt.sign(
        {
            id: user._id,
            password: user.password
        },
        process.env.JWT_SECRET_FOR_VERIFY,
        { expiresIn: '15m' }
    );
};

exports.isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

exports.isAdmin = async (req, res, next) => {
    try {
        const admin = await Admin.findById(req.user.id);
        if (!admin) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
