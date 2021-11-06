const router = require('express').Router();
const productsRouter = require('./productsRouter');

router.use('/sneakers-api', productsRouter);

module.exports = router