const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://sayantandey506:GSUW1rY5zZ11tPu3@backend00.gs3ow.mongodb.net/";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
