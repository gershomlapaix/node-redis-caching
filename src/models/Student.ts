import mongoose, { Schema } from "mongoose";
import { IStd } from "../interfaces/StudentInterface";

const studentSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  theClass: String,
  age: Number,
});

export default mongoose.model<IStd>("student", studentSchema);
