const express = require('express');
const bodyParser = require('body-parser');

const connection = require('./config/DatabaseConfig')

const equipeRouter = require('./routes/EquipeRouter')



const equipeModel = require('./models/equipe.model');


connection.getConnections();

const app = express();

// for cors origin config
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/equipes',equipeRouter);

module.exports = app;
