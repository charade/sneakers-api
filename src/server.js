require('dotenv').config();
const  swaggerUi = require('swagger-ui-express') ;
const swaggerOptions = require("../swagger.json")

const db = require('./models');
const express = require('express');
const router = require('./routes');
const server = express();


server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods', 'GET');
    next();
});

server.use(express.urlencoded());
server.use(express.json());
//docs set up
server.use('/', swaggerUi.serve, swaggerUi.setup(swaggerOptions));
server.use(router);

server.use((error, req, res, next) => {
    //cannot deconstruct because error can be 500
    code = error.code;
    description = error.description;
    message = error.message;
    //if not code error.code is 500
    res.status(code || 500).json({
        code : code || 500,
        message : message || 'Oops an error occured',
        description: description || 'It will be fixed soon'
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    db.sequelize.sync({alter : false});
});