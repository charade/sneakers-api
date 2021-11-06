const router = require('express').Router();
const productsRouter = require('./productsRouter');

router.use('/sneakers',productsRouter);

module.exports = router