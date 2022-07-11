const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "pale",
  password: "vfrcqwer0",
});
connect.connect((err) => {
  err ? console.log(err) : console.log("Database connect ------");
});
app.get("/post", (req, res) => {
  connect.query("SELECT * FROM post", (err, result) => {
    console.log(result);
    if (result) return res.send({ post: result });
  });
});
app.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  console.log(name, password);
  connect.query(
    "SELECT id FROM user WHERE name = ? AND password = ?",
    [name, password],
    (err, result) => {
      console.log(result);
      if (result != []) {
        res.send({ name: name });
      }
    }
  );
});
app.post("/registration", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  connect.query(
    "SELECT id FROM user WHERE name = ? AND password = ?",
    [name, password],
    (err, result) => {
      //console.log(result.length);
      if (result.length == 0) {
        connect.query(
          "INSERT INTO user (name,password) VALUES (?,?)",
          [name, password],
          (err, result) => {
            if (err) return res.send({ msg: err });
            connect.query(
              "SELECT id FROM user WHERE name = ? AND password = ?",
              [name, password],
              (err, result) => {
                res.send({ id: result, name: name });
              }
            );
          }
        );
      } else {
        console.log("User create....");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server start -------");
});
