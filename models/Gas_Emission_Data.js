const mongoose = require('mongoose');
const countriesGasesSchema = new mongoose.Schema({
  c_id: {
    type: String,
    required: true
  },
  country_or_area: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  gas: [
    {
      category: {
        type: String,
        required: true
      },
      value: {
        type: mongoose.Types.Decimal128,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('countries_gases_emission', countriesGasesSchema);

