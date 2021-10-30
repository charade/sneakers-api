require('dotenv').config();
const db = require('./models');
const express = require('express');
const router = require('./router');
const server = express();
const PORT = process.env.PORT1 || process.env.PORT2 || process.env.PORT3;

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods', 'GET');
    next();
});

server.use(express.urlencoded());
server.use(express.json());
server.use(router);

server.listen(PORT, () => {
    console.log('running on :' + PORT);
    db.sequelize.sync({alter : true});
});