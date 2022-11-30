import { Request, Response, NextFunction } from "express";
import Student from "./../models/Student";

// exports.createStudent = async(req:Request, res:Response, next:NextFunction)=>{
//     const {firstName, lastName, theClass, age} = req.body
// }

exports.getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const students = await Student.find({});

  res.json({ students, count: `${students.length} students` }).status(200);
};
