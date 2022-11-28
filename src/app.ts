import "dotenv/config";
import connectToDB from "./../db.js";
import * as dotenv from "dotenv";
import express from "express";

dotenv.config({ path: __dirname + "/.env" });

const app = express();
connectToDB();

app.use(express.json());

const port: any = process.env.PORT || 4000;

app.listen(port, () => console.log("App is running....", process.env.PORT));
