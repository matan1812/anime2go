const express = require('express');
const router = express.Router();
const {prodsModel,validProds} = require("../models/prods_model");

/* GET home page. */
router.get('/', (req, res, next) => {
  //req.params, req.query , req.body
  prodsModel.find()
  .then(data => {
    res.json(data);
  })
});

//localhost:3000/search/?q=fo
router.get('/search', (req, res, next) => {
  //req.params, req.query , req.body
  let searchQ = new RegExp(req.query.q)
  prodsModel.find({$or:[{name:searchQ},{cat:searchQ}]})
  .then(data => {
    res.json(data);

  })
});


router.post("/add",(req,res) => {
  let validData = validProds(req.body);
  if(validData.error){
    return res.status(400).json(validData.error.details);
  }
  prodsModel.insertMany([req.body])
  .then(data => {
    res.status(201).json(data[0])
  })
  .catch(err => {
    res.status(400).json(err)
  })
})

module.exports = router;


