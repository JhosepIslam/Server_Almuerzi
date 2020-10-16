const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Oders = mongoose.model("Oder", new Schema({
    meal_id : { type : Schema.Types.ObjectId, ref : 'Meal'},
    user_id : String //{type : Schema.Types.ObectId}

}))

module.exports = Oders