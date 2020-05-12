const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o app
const app = express();

//iniciando o bd
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology:true });

requireDir('./src/models');


//acesso às rotas
app.use('/api', require('./src/routes'));


app.listen(3333);