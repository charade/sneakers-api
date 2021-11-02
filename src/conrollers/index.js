const { Op } = require('sequelize');
const  {products, brands} = require('../models');
//all product routes methods

module.exports = {
    //get all of a brand/gender
    getAll : async(gender, brand, maxPrice ) => {
        let results = await products.findAll({
            where : {
                gender : {
                    [Op.like]: `%${ gender ?? '' }%`
                },
                brandsName :{
                    [Op.like]: `%${ brand ?? '' }%`
                },
            },
            attributes : {exclude : ["createdAt", "updatedAt"]}
        });
        //filter by price
        if(maxPrice){
            results = results.filter(item => parseInt(item.price) <= maxPrice)
        }
        return results;
    },
    //get one from id
    getOne : async(id) => {
        const result = await products.findOne({
            where : {id},
            attributes : {exclude : ["createdAt", "updatedAt"]}
        })
        return result;
    },
    getBrands : async() => {
        const results = await brands.findAll();
        return results;
    }

}