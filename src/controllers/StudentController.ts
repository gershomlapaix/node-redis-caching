import { Request, Response, NextFunction } from "express";
import Redis from 'ioredis'
import mongoose from "mongoose";
import Student from "./../models/Student";

const redis = new Redis()

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

const getOneStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  const student = await Student.findById({ _id: mongoose.Types.ObjectId(id)});

  if (!student) {
   throw new Error(`Student with id ${id} is not found`)
  } else {
    redis.set(id, JSON.stringify(student),"ex",15)
    res.json(student).status(200);
  }
};

export { getAllStudents, createStudent, getOneStudent };
