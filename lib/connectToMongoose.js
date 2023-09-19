const mongoose = require("mongoose");

const connectToMongoose = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    console.info("Successfully connected to Mongo");
  } catch (err) {
    console.error("Error connecting to Mongo");
    process.exit(1);
  }
};

module.exports = connectToMongoose;
