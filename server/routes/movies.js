const express = require('express');
const movieModel = require('../models/Movies');
const router = express.Router();

const movierequestHandler = async ( req, res, next ) => {

  const movies = await movieModel.find();
  res.send(movies);
};
router.get('/',movierequestHandler);

module.exports = router;
