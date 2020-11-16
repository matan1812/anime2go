const mongoose = require("mongoose");
const joi = require("joi");


let prodsSchema = new mongoose.Schema({
  cat:String,
  name:String,
  price:Number,
  image:String,
  date_time:{
    type:Date, default:Date.now()
  }
})

exports.prodsModel = mongoose.model("prods",prodsSchema);

exports.validProds = (_prodObj) => {
  let schema = joi.object({
    cat:joi.string().min(2).max(50).required(),
    name:joi.string().min(2).max(50).required(),
    price:joi.number().min(0).required(),
    image:joi.string().min(2).max(200).required()
  })

  return schema.validate(_prodObj);
}
