const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({ message: "Ce email existe deja" });
    }

    const newUser = new User({
      username,
      email,
      password,
    });
    await newUser.save();
    return res.status(200).json({ message: "Utilisateur enregistre" });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur", error });
  }
});

module.exports = router;
