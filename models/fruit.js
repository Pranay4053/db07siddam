const mongoose = require("mongoose") 
const fruitSchema = mongoose.Schema({ 
 fruit_type: String, 
 quantity: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Fruit", 
fruitSchema) 
