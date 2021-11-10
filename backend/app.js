'use strict';
const express = require('express');
const app = express();
const port = 30001;
app.use(express.json());

app.use("/app/usuario/password", require("./app/middleware/auth") );



app.use("/app", require("./app/route/usuarioRoute"));

// app.use('/app/produto', require('./app/route/produtoRoute'));

const server = app.listen(port, () => {
  
    console.log("* Port " + port);
  
});