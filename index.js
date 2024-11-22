const express = require('express');
const app = express();

const port = process.env.PORT || 8082;

app.get('/', (req, res) => { 
    res.send('Servidor contestando a peticion GET');  });

app.listen(port, () => {
    console.log(`Servidor express escuchando en puerto ${port}`)
});