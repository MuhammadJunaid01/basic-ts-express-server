import express from "express";
import { createStudent, getAllstudents } from "./student.controller";
import { createStudentZodSchema, validateRequest } from "./student.validator";

const router = express.Router();
router.get("/students", getAllstudents);
router.post(
  "/create/student",
  validateRequest(createStudentZodSchema),
  createStudent,
);
export { router as studentRouter };
