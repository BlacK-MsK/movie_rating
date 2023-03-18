const mongoose = require('mongoose') ;

const columns = {
  title : String,
  image : String,
  rating : Number
};

const schema = new mongoose.Schema(columns);
const model = mongoose.model('movies', schema);


module.exports = model;