const router = require('express').Router();
const { getAll, getOne, getBrands, getABrand, getGender, getMaxPrice } = require('../conrollers');
const {BadRequestError, NotFoundError}  = require('../handlers/errors');

//return a genre product
router.get('/', async(_, res) => {
    const results = await getAll();
    res.status(200).json(results)
})
//filter by gender
router.get('/get-gender/:gender', async(req, res, next) => {
    const { gender } = req.params;
    //bad request handler
    if(!(/Men/i.test(gender)) && (!/women/i.test(gender))){
        next(new BadRequestError('bad entry', 'gender must be either men or women'));
        return;
    }
    const results = await getGender(gender);
    res.status(200).json(results);
});
//filter by brand
router.get('/get-a-brand/:brand', async(req, res, next) => {
    const { brand } = req.params;
    const results = await getABrand(brand);

    //check if results were found
    if(!Object.keys(results).length){
        next(new NotFoundError(`this brand is not available`));
        return;
    }
    res.status(200).json(results)
});
//filter by max price
router.get('/max-price/:price', async(req, res) => {
    const { price }  = req.params;
    const results = await getMaxPrice(price);
    res.status(200).json(results);
})
//return details of a sneaker
router.get('/get-one/:id', async(req, res, next) => {
    const { id } = req.params;
    const result = getOne(id);

    //check if results were found
    if(!Object.keys(result).length){
        next(new NotFoundError(`this item does not exist`));
        return;
    }
    res.status(200).json(result);
})
//return all available brands
router.get('/get-brands', async(req, res) => {
    const results = await getBrands();
    res.status(200).json(results);
})
module.exports = router;