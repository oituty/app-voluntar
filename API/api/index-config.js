// Importando os módulos/dependências/bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');

// Instanciando o express
const app = module.exports = express();


const allowCors = (req, res, next) => {

	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    next();
};

// Aplicando o body parser
app.use(bodyParser.json());

//Aplicando autorizações CORS
app.use(allowCors);

// Conecta a nossa api ao banco de dados
app.use(expressMongoDb('mongodb://localhost/voluntarios'));

// Inicializando o servidor
app.listen(5000, () => {
    console.log('Servidor ligado. Acesse através de http://localhost:5000');
});
app.use(bodyParser.urlencoded({

        extended: true
    })
);