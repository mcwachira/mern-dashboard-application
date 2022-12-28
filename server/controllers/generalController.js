const User = require('../models/userModel')



const getUser = async (req, res) => {
    const { id } = req.params.id

    try {
        const user = await User.findById(id).exec()
        res.status(2000).json(user)


    } catch (error) {
        res.status(404).json({ message: 'user with that id not found' })
    }



}

module.exports = {
    getUser
}