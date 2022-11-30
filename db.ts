import mongoose, { ConnectOptions } from "mongoose";

function connectToDB() {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    } as ConnectOptions)
    .then((db: any) => {
      console.log("Database Connected Successfuly.");
    })
    .catch((err: any) => {
      console.log(err.message);
      
      console.log("Error Connectiong to the Database", err);
    });
}

export { connectToDB };
