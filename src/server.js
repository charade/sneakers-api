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
server.use('/sneakers-api/docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));
server.use(router);

const PORT = process.env.PORT1 || process.env.PORT2 || process.env.PORT3;

server.listen(PORT, () => {
    db.sequelize.sync({alter : false});
});