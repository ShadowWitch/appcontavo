const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schemaUsuario = new Schema({
    username:{
        type: String,
        required: [true, 'Ingrese su usuario.']
    },
    email:{
        type: String,
        required: [true, 'Ingrese su email.']
    },
    password:{
        type: String,
        required: [true, 'Ingrese su contrasena.']
    }
})


module.exports = mongoose.model('Usuario', schemaUsuario)
