const connectToMongoose = require("./lib/connectToMongoose");
const { uri } = require("./config.json");
const Movies = require("./models/MovieModel");
const data = require("./movies.json");

const addMovies = async (movies) => {
  await Movies.create(movies);
};

const initialize = (movies) => {
  connectToMongoose(uri).then(() => {
    addMovies(movies)
      .then(() => {
        console.info("Successfully added movies to Mongo");
        process.exit(0);
      })
      .catch((err) => {
        console.info("Error creating document", err.message);
        process.exit(1);
      });
  });
};

initialize(data);
