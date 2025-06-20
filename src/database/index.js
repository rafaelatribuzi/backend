import mongoose from "mongoose";
// Database connection URL
const dbURL = process.env.DB_KEY;

//Connect to the database
const connectToMongo = () => {
  mongoose.connect(dbURL);

  mongoose.connection.on("connected", () => {
    console.log("Connected to the database");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Database connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from the database");
  });

};

export { connectToMongo };
