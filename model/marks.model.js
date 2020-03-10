const mongoose = require('mongoose');

var marksSchema = new mongoose.Schema({
    title: String,
    gps_lat: String,
    gps_long: String,
    updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('marks', marksSchema)
