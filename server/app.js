const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// require models
const Usuario = require("../models/usuarios");

// create application/x-www-form-urlencoded parser // Para Aplicaciones Form o Formulario
app.use(bodyParser.urlencoded({ extended: false }));
// create application/json parser                 // Para Aplicaciones Json
app.use(bodyParser.json());

// Conexion DB
mongoose.connect("mongodb://localhost:27017/proyecttavo", (err, res) => {
  if (err) throw err;
  console.log(`Conectado a proyecttavo.`);
});

//Tavo
app.get("/users", (req, res) => {
  res.json({
    ok: true,
    msg: "hola mundo",
  });
});

app.post("/users", (req, res) => {
  const { username, password, email } = req.body;

  const usuario = new Usuario({
    username,
    password,
    email,
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      usuarioDB,
    });
  });
});

app.listen(port, () => {
  console.log(`Server in port ${port}`);
});

// qwe
