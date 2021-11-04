'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.use('/app', require('./app/middleware/saveUser'));

app.use(express.json());
app.use('/', require('/'));

app.use('/app/usuario', require('./app/route/usuarioRoute'));
app.use('/app/produto', require('./app/route/produtoRoute'));

const server = app.listen(port, () => {
  
    console.log("* Port " + port);
  
});