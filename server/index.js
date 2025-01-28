require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const coockie_parser = require("cookie-parser");
const signup = require("./routes/SignUp");
const signIn = require("./routes/login");
const Auth_user = require("./auth");
const signOut = require("./routes/signOut");
//Mongoose db connection
require("./db");
//le passerelle
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(coockie_parser());
//les routes
app.use("/auth", signup);
app.use("/auth", signIn);
app.use("/auth", Auth_user);
app.use("/auth", signOut);

app.listen(port, () => {
  console.log(`Juste un test sur le port ${port}`);
});
