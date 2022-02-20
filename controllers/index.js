const GasData = require('../models/Gas_Emission_Data')
const countries = require('../country_id')
const fs = require('fs')
module.exports = {
  getAllCountries: async (req, res) => {
    const { startYear, endYear } = req.query
    if (startYear === undefined || endYear === undefined) {
      res.status(400).end("Incomplete params")
    } else if (isNaN(startYear) || isNaN(endYear)) {
      res.status(400).end("Invalid params")
    } else {
      try {
        res.status(200).json(await GasData.find({ "year": { $gte: startYear, $lte: endYear } }))
      } catch (error) {
        res.status(500).json(error)
      }
    }
  },

  getCountry: async (req, res) => {
    const country_id = req.params.id;
    const { startYear, endYear, gases } = req.query
    if (startYear === undefined || endYear === undefined || gases === undefined) {
      res.status(400).end("Incomplete params")
    } else if (isNaN(startYear) || isNaN(endYear)) {
      res.status(400).end("Invalid params")
    } else if (!countries.filter(country => country.id === country_id).length) {
      res.status(400).end("Invalid country code")
    }
    else {
      const gases_arr = gases.split(',')
      try {
        const resData = await GasData.find({ "c_id": country_id, "year": { $gte: startYear, $lte: endYear } })
        resData.forEach(data => {
          data.gas = data.gas.filter(g => {
            if (gases_arr.includes(g.category)) {
              return g
            }
          })
        })
        res.status(200).json(resData)
      } catch (error) {
        res.status(500).json(error)
      }
    }
  }
}