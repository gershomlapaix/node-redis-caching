import express, { Router } from "express";
import {
  getAllStudents,
  createStudent,
} from "../controllers/StudentController";

const router: Router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);

export = router;
