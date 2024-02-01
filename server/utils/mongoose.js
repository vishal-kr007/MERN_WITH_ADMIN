const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

// mongoose.connect(URI);

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection Successfull to DB")
    } catch (error) {
        console.error("Database connection error");
        process.exit(0);
    }
}

module.exports = connectDB;