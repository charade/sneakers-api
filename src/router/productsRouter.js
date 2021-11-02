const router = require('express').Router();
const { getAll, getOne, getBrands } = require('../conrollers');

//return a genre product
router.get('/get-all', async(req, res) => {
   
    const { gender, brand, maxPrice } = req.query;
    const results = await getAll(gender, brand, maxPrice);
    res.status(200).json(results);
})
//return details of a sneaker
router.get('/get-one/:id', async(req, res) => {
    const { id } = req.params;
    const result = getOne(id);
    res.status(200).json(result);
})

router.get('/get-brands', async(req, res) => {
    const results = await getBrands();
    res.status(200).json(results);
})

module.exports = router;