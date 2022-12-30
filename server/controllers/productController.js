
const Product = require('../models/productModel')
const ProductStat = require('../models/productStatsModel')



const getProducts = async (req, res) => {


    try {
        const products = await Product.find()

        //get product stats for individual products

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({

                    productId: product._id
                })

                return {
                    ...product._doc, //when using promise.all
                    stat
                }
            })


        )
        res.status(200).json(productsWithStats)


    } catch (error) {
        res.status(404).json({ message: 'products have not been found' })
    }



}

module.exports = {
    getProducts
}




