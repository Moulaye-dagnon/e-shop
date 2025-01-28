const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Ce email n'existe pas" });
    }
    const password_cheick = await bcrypt.compare(password, user.password);
    if (!password_cheick) {
      return res
        .status(401)
        .json({ message: "Votre mot de passe est incorrecte" });
    }
    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      createAt: user.createAt,
    };
    const token = jwt.sign(payload, process.env.KEY, { expiresIn: "2h" });
    res.cookie("token", token, { httpOnly: true, maxAge: 720000 });
    return res
      .status(200)
      .json({ message: "Vous etes connecte", user: payload });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur", error });
  }
});

module.exports = router;
