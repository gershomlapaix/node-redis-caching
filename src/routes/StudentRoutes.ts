import express, { Router } from "express";
import {
  getAllStudents,
  createStudent,
  getOneStudent,
} from "../controllers/StudentController";

const router: Router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router.route("/:id").get(getOneStudent);

export = router;
