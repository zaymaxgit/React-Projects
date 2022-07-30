const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bp = require("body-parser");

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "testSearch",
  password: "vfrcqwer0",
});
connect.connect((err) => {
  err ? console.log(err) : console.log("Database connect --- OK");
});

app.get("/post-get", (req, res) => {
  connect.query("SELECT * FROM post;", (err, result) => {
    result ? res.send({ result: result }) : console.log(err);
  });
});

app.listen(3002, () => {
  console.log("Server start --- OK");
});
