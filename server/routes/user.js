const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body.dataForm;
  //   console.log(username, email, password);
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "Ce email existe deja" });
  }

  const newUser = new User({
    username,
    email,
    password,
  });
  await newUser.save();
  return res.json({ message: "Utilisateur enregistre" });
});

module.exports = router;
