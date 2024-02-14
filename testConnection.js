require("dotenv").config();

const mongoose = require("mongoose");
// Replace 'your_mongodb_uri' with your actual MongoDB URI
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Successfully connected to MongoDB!");
    // Close the connection after successful connection message
    db.close();
});
