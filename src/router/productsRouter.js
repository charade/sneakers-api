const router = require('express').Router();
const { getAll, getOne, getBrands, getABrand, getGender, getMaxPrice } = require('../conrollers');

//return a genre product
router.get('/', async(_, res) => {
    const results = await getAll();
    res.status(200).json(results)
})
//filter by gender
router.get('/get-gender/:gender', async(req, res) => {
    const { gender } = req.params;
    const results = await getGender(gender);
    res.status(200).json(results);
})
//filter by brand
router.get('/get-a-brand/:brand', async(req, res) => {
    const { brand } = req.params;
    const results = await getABrand(brand);
    res.status(200).json(results)
});
//filter by max price
router.get('/max-price/:price', async(req, res) => {
    const { price }  = req.params;
    const results = await getMaxPrice(price);
    res.status(200).json(results);
})
//return details of a sneaker
router.get('/get-one/:id', async(req, res) => {
    const { id } = req.params;
    const result = getOne(id);
    res.status(200).json(result);
})
//return all available brands
router.get('/get-brands', async(req, res) => {
    const results = await getBrands();
    res.status(200).json(results);
})

module.exports = router;