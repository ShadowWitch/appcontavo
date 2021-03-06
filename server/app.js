const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const cors = require('cors')

// require models
const Usuario = require("../models/usuarios");

// create application/x-www-form-urlencoded parser // Para Aplicaciones Form o Formulario
app.use(bodyParser.urlencoded({ extended: false }));
// create application/json parser                 // Para Aplicaciones Json
app.use(bodyParser.json());

// Lista de origins permitidos
// const whiteList = ['http://localhost:3000', 'http://127.0.0.1:5500']

app.use(cors())


// Configuracion de Carpetas / Motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))


// Conexion DB
mongoose.connect("mongodb+srv://youtube_dev:pTcSpLibkpD4aChu@cluster0.9kgqd.mongodb.net/tavodb?retryWrites=true&w=majority", (err, res) => {
  if (err) throw err;
  console.log(`Conectado a proyecttavo.`);
});

//Tavo
app.get("/users", (req, res) => {
  res.render('index')
});


app.get('/carros2', (req, res) =>{
  res.json({
    ok: true,
    msg: 'Tienes un carro'
  })
})

app.get('/lala', (req, res) =>{
  res.json({
    ok: true,
    msg: 'Tienes un lala'
  })
})


app.post('/carros', (req, res) =>{
  res.send({
    ok: true,
    msg: "hola"
  })
})


app.put('/users', (req, res) =>{
  res.json({
    msg: "hola"
  })
})


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
        msg:'Hola mundo',
        err
      });
    }

    res.json({
      ok: true,
      usuarioDB
    })

  });
});



app.listen(port, () => {
  console.log(`Server in port ${port}`);
});

// qwe
