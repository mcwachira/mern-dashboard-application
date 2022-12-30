
const User = require('../models/userModel')
const getCountryIso3 = require('country-iso-2-to-3')

const getGeography = async (req, res) => {


    try {
        const users = await User.find()
        const mappedLocations = users.reduce((acc, { country }) => {
            const countryISO3 = getCountryIso3(country)

            if (!acc[countryISO3]) {
                acc[countryISO3] = 0
            }

            acc[countryISO3]++;
            return acc;
        }, {})


        //this formats our data into key value pairs
        const formattedLocations = Object.entries(mappedLocations).map(
            ([country, count]) => {
                return {
                    id: country, value: count
                }
            })


        res.status(200).json(formattedLocations)


    } catch (error) {
        res.status(404).json({ message: error.message })
    }



}

module.exports = {
    getGeography
}




