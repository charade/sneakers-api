const { Op } = require('sequelize');
const  {products, brands} = require('../models');
//all product routes methods

module.exports = {
    //get all of a brand/gender
    getAll : async() => {
        return products.findAll();
    },
    //filter by brandsName or gender or maxPrice
    getGender : async(gender) => {
        let results = await products.findAll({
            where : {
                gender : {
                    [Op.startsWith] : `${ gender }`
                },
            },
        });
        console.log(results)
        return results;
    },
    getABrand : async(brand) => {
        let results = await products.findAll({
            where : {
                brandsName : {
                    [Op.startsWith] : `${ brand }`
                }
            },
        })
        console.log(results)
        return results;
    },
    getMaxPrice : async(price) => {
        const results = await products.findAll();
        return result.filter(item => parseInt(item.price) <= price)
    },
    //get one from id
    getOne : async(id) => {
        const result = await products.findOne({
            where : {id},
        })
        return result;
    },
    getBrands : async() => {
        const results = await brands.findAll();
        return results;
    }

}