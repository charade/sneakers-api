const { Op } = require('sequelize');
const  {products} = require('../models');
//all product routes methods

module.exports = {
    //url encoded search
    search : async(args) => {

        const results = await products.findAll({
            where : {
                //get all matching products
                [Op.or] : {
                    name : {
                        [Op.like] : `%${args}%`
                    },
                    brandsName : {
                        [Op.startsWith] : `%${args}%`
                    }
                }
            }
        });
        return results;
    },

    //filter products by brands
    searchByBrand : async(brand) => {
        const products = await products.findAll({
            where : {
                brandsName : {
                    [Op.like] : `%${brand}%`
                }
            }
        });

        return products;
    }
}