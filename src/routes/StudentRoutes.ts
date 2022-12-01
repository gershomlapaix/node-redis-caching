import express, { Router } from "express";
import {
  getAllStudents,
  createStudent,
  getOneStudent,
} from "../controllers/StudentController";
import { cache } from "../middlewares/cache";

const router: Router = express.Router();

router.route("/").get(cache,getAllStudents).post(createStudent);
router.route("/:id").get(cache,getOneStudent);

export = router;
