const mongoose = require('mongoose')
const User = require('../models/userModel')
const Transaction = require('../models/transactionModel')


const getUserStats = async (req, res) => {




    try {

        const { id } = req.params
        //aggregate call
        const userWithStats = await User.aggregate([
            {
                $match: {

                    //converting the id to right format and finding the user with the specific id
                    _id: new mongoose.Types.ObjectId(id)
                }
            },
            {
                //getting data from affiliate state model
                $lookup: {
                    from: "affiliatestats",
                    localField: "_id",
                    foreignField: "userId",
                    as: "affiliateStats",
                },
            },
            { $unwind: "$affiliateStats" }
        ])
        // console.log('hello', userWithStats)

        const salesTransactions = await Promise.all(
            userWithStats[0].affiliateStats.affiliateSales.map((id) => {
                return Transaction.findById(id)
            })
        )

        const filteredSaleTransactions = salesTransactions.filter((transaction) => transaction !== null)

        res.status(200).json({
            user: userWithStats[0], sales: filteredSaleTransactions
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }



}

module.exports = {
    getUserStats
}


