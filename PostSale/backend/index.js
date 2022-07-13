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
    if (result) return res.send({ post: result });
  });
});
app.post("/login", (req, res) => {
  const data = req.body;
  connect.query(
    "SELECT * FROM user WHERE login = ? AND password = ?",
    [data.login, data.password],
    (err, result) => {
      if (result != []) {
        res.send({ msg: result });
      }
      if (err) console.log(err);
    }
  );
});
app.post("/registration", (req, res) => {
  const data = req.body;
  connect.query(
    "SELECT id FROM user WHERE login = ? AND password = ?",
    [data.login, data.password],
    (err, result) => {
      if (result.length == 0) {
        connect.query(
          "INSERT INTO user (login,password,firstname,lastname) VALUES (?,?,?,?)",
          [data.login, data.password, data.firstname, data.lastname],
          (err, result) => {
            if (err) return res.send({ msg: err });
            connect.query(
              "SELECT id FROM user WHERE login = ? AND password = ?",
              [data.login, data.password],
              (err, result) => {
                res.send({
                  id: result,
                  firstname: data.firstname,
                  lastname: data.lastname,
                });
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
app.post("/postAdd", (req, res) => {
  const data = req.body;
  connect.query(
    "INSERT INTO post (uid,title,description,date,cost,user,img,city) VALUES (?,?,?,?,?,?,'https://dizainexpert.ru/wp-content/uploads/2020/07/foto-peregorodki-v-studii-scaled.jpg',?)",
    [
      data.uid,
      data.title,
      data.description,
      data.date,
      data.cost,
      data.user,
      data.city,
    ],
    (err, result) => {
      if (result) return res.send({ msg: result });
      if (err) return console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("Server start -------");
});
