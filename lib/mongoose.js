const mongoose = require("mongoose");

function mongooseConnect() {
    // If the connection is already established, return the existing connection
    if (mongoose.connection.readyState === 1) {
        console.log("Using existing MongoDB connection");
        return mongoose.connection.asPromise();
    } else {
        const uri = process.env.MONGODB_URI;

        // Listen to connection events only once to avoid attaching multiple listeners in case of repeated calls
        mongoose.connection.once("connecting", () => {
            console.log("Connecting to MongoDB...");
        });
        mongoose.connection.once("connected", () => {
            console.log("Connected to MongoDB");
        });
        mongoose.connection.once("error", (err) => {
            console.error("Connection error:", err);
        });
        mongoose.connection.once("disconnected", () => {
            console.log("Disconnected from MongoDB");
        });

        // Attempt to connect to MongoDB
        return mongoose
            .connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("MongoDB connection established");
            })
            .catch((err) => {
                console.error("Error connecting to MongoDB:", err);
                // Depending on your application's needs, you might want to throw the error,
                // return it, or handle it in another way here.
                throw err; // For example, re-throwing the error to be handled by the caller
            });
    }
}

module.exports = { mongooseConnect };
