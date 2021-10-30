const router = require('express').Router();
const { search } = require('../conrollers/productsController');

router.get('/search/:product', async(req, res) => {
    const { product } = req.params;
    const resp = await search(product);
    console.log(resp);
})

router.get('/filter-by-brand/:brand', async(req, res) => {
    const { brand } = req.params;
    const response = await searchByBrand(brand);
    console.log(response);
});

module.exports = router;