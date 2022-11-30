import "dotenv/config";
import express from "express";
import * as dotenv from "dotenv";
import { connectToDB } from "./../db";
dotenv.config({ path: __dirname + "/.env" });
import studentRoutes from "./routes/StudentRoutes";
const app: express.Application = express();
connectToDB();

app.use(express.json());

app.use("/api/v1/student", studentRoutes);

const port: any = process.env.PORT || 4000;

app.listen(port, () => console.log("App is running....", process.env.PORT));
