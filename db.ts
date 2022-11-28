import mongoose, { ConnectOptions } from "mongoose";

function connectToDB() {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    } as ConnectOptions)
    .then((db) => {
      console.log("Database Connected Successfuly.");
    })
    .catch((err) => {
      console.log("Error Connectiong to the Database");
    });
}

export { connectToDB };
