import { Document } from "mongoose";
export interface IStd extends Document {
  firstName: string;
  lastName: string;
  class: string;
  age: number;
}
