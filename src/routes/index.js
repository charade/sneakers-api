const router = require('express').Router();
const productsRouter = require('./productsRouter');

router.use(productsRouter);

module.exports = router