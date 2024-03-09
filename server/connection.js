const mongoose = require("mongoose");

const connectDB = (url) => {
  try {
    mongoose.connect(url).then(() => console.log("Database Connected!"));
  } catch (error) {
    console.log("Database Connection Error ! ", error);
  }
};

module.exports = { connectDB };
