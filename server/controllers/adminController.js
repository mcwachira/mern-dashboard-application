
const User = require('../models/userModel')

const getAdmin = async (req, res) => {


    try {
        const admin = await User.find({ role: "admin" }).select('-password')


        res.status(200).json(admin)


    } catch (error) {
        res.status(404).json({ message: 'products have not been found' })
    }



}

module.exports = {
    getAdmin
}




