const mongoose = require('mongoose') ;

const columns = {
  userName : {type: 'string', required: true},
  email : {type: 'string', required: true, unique: true},
  password : {type: 'string', required: true}
};

const schema = new mongoose.Schema(columns);
const model = mongoose.model('Users', schema);


module.exports = model;