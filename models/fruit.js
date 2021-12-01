const mongoose = require("mongoose")
const fruitSchema = mongoose.Schema({
    fruit_type: String,
    quantity: {type:String,length:9},
    cost: {type:Number,min:3,max:100}
})
module.exports = mongoose.model("fruit",
    fruitSchema)