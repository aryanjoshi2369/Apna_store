const mongoose = require("mongoose");
const db =
  "mongodb+srv://apnastore338:bM125mSsJqzbvKIl@sample.us4o9.mongodb.net/?retryWrites=true&w=majority&appName=sample";

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
