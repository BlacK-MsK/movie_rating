const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect('mongodb+srv://BlackMask:mjrIlXgTqglNOaRo@cluster0.ijmqu1l.mongodb.net/moviesDB?retryWrites=true&w=majority');
}

module.exports = {connectDB};


// BlackMask

// mjrIlXgTqglNOaRo