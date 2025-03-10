const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

exports.register = async (req, res) => {
  const { username, password, isAdmin } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      username,
      password,
      isAdmin,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
        isAdmin: user.isAdmin,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: "5h" }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
        isAdmin: user.isAdmin,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: "5h" }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
