const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const path = require("path");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "webapp/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "webapp/dist/index.html"));
});
app.listen(5000, () => {
  console.log("Node JS server is started");
});
