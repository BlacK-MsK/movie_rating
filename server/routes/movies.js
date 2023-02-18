var express = require('express');
var router = express.Router();

const harryPotterFirst = {
  title: "Harry Potter and the Sorcerer's Stone",
  image: "https://rukminim1.flixcart.com/image/850/1000/l0pm3680/poster/3/i/j/large-harry-potter-the-sorcerer-s-stone-poster-poster-print-on-original-imagcfwh8av8gukb.jpeg?q=20",
  rating: 5
};

const doctorStrange = {
  title: "Doctor Strange in the Multiverse of Madness",
  image: "https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg",
  rating: 4.5
};

const ironman = {
  title: "Captain America: Civil War",
  image: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg",
  rating: 4
};

const spiderman = {
  title: "Spider-Man: No Way Home",
  image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
  rating: 5
};

const blackPanther = {
  title: "Black Panther",
  image: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
  rating: 3.7
};

const interstellar = {
  title: "Intersteller",
  image: "https://www.themoviedb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  rating: 5
};

const theLastOfUs = {
  title: "The Last of Us",
  image: "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg",
  rating: 4
};

const avengers = {
  title: "Avengers: Infinity War",
  image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
  rating: 5
};

const movies = [
  harryPotterFirst,
  doctorStrange,
  ironman,
  spiderman,
  blackPanther,
  interstellar,
  avengers,
  theLastOfUs
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(movies);
});

module.exports = router;
