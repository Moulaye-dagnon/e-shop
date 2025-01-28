const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const verify_user = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false, message: "no token" });
  }
  const decoded = await jwt.verify(token, process.env.KEY);
  req.user = decoded;
  next();
};
router.get("/verify", verify_user, (req, res) => {
  const { user } = req;
  console.log(user);
  return res.json({
    status: true,
    message: "l'utilisateur est autorise",
    user,
  });
});

module.exports = router;
