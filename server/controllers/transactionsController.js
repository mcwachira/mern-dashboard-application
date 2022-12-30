const Transaction = require('../models/transactionModel')


const getTransactions = async (req, res) => {

    try {
        //sort should look like this {'fields, "userId", "sort", "desc"}

        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query

        //formatted sort should look like {userID : -1}

        const generateSort = () => {
            const sortParsed = JSON.parse(sort)
            const sortFormatted = {
                [sortParsed.field]: (sortParsed.sort = 'asc' ? 1 : -1),
            }

            return sortFormatted;
        }
        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const transactions = await Transaction.find({
            //this will used to search based pon a sting passed
            $or: [
                { cost: { $regex: new RegExp(search, 'i') } },
                { userId: { $regex: new RegExp(search, 'i') } }

            ],
        }).sort(sortFormatted)
            .skip(page * pageSize)
            .limit(pageSize)

        //enables us to find the total number of documents 
        const total = await Transaction.countDocuments({
            name: { $regex: search, $options: 'i' }
        })


        return res.status(200).json({
            transactions,
            total
        })
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getTransactions
}
