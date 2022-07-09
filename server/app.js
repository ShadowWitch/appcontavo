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


app.get('/carros', (req, res) =>{
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
  res.header({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials' : true
  }).json({
    ok: true,
    msg: 'Tienes un carro POST'
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
      res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
      return res.status(500).json({
        ok: false,
        msg:'Hola mundo',
        err
      });
    }

    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    })

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
