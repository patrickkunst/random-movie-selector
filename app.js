const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const connectToMongoose = require("./lib/connectToMongoose");
const Movies = require("./models/MovieModel");
const { uri } = require("./config.json");

connectToMongoose(uri).then(() => {
  Movies.find({ watched: false }).then((movies) => {
    let i = Math.floor(Math.random() * movies.length);
    console.info(`Movie: ${movies[i].title}`);
    readline.question(
      "Y to mark as watched or anything else to exit",
      (ans) => {
        if (ans === "Y") {
          Movies.findByIdAndUpdate(movies[i]._id, { $set: { watched: true } })
            .then(() => {
              process.exit(0);
            })
            .catch((err) => {
              console.error("Error updating the movie", err.message);
              process.exit(1);
            });
        } else process.exit(0);
      }
    );
  });
});
