const express = require("express");
const router = express.Router();

router.post("/signOut", (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Vous etes deconnecte" });
});

module.exports = router;
