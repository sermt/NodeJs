const express = require("express");
const app = express();
require('dotenv').config();
app.set("view engine", "hbs");


app.use(express.static("public"));
const data = { username: "Jhin", email: "4@email.com" };
app.get("/", function (req, res) {
  res.render("home", data);
});
app.get("/generic", function (req, res) {
  res.render("home");
});
app.get("/elements", function (req, res) {
  res.sendFile(__dirname + "/public/elements.html");
});
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(process.env.PORT);
