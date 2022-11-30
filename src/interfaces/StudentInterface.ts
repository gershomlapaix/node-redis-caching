import { Document } from "mongoose";
export interface IStd extends Document {
  firstName: string;
  lastName: string;
  theClass: string;
  age: number;
}
