import { Request, Response, NextFunction } from "express";
import Student from "./../models/Student";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, theClass, age } = req.body;

  const newStudent = await Student.create({
    firstName,
    lastName,
    theClass,
    age,
  });

  res.json({ createdStudent: newStudent }).status(200);
};

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const students = await Student.find({});

  res.json({ students, count: `${students.length} students` }).status(200);
};

export { getAllStudents,createStudent };
