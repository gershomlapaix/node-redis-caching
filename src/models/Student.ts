import mongoose, { Schema } from "mongoose";

const studentSchema:Schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  class: String,
  age: Number,
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
