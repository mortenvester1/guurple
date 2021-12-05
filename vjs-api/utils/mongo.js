// Implement Mongo DB connection
const mongoose = require("mongoose");

const connection = "mongodb://mongo:27017/mongo-test";

const _mongoConnection = () => {
  return mongoose.connect(connection);
};

module.exports = _mongoConnection;
