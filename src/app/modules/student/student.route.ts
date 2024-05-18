import express from "express";
import { getAllstudents } from "../student.controller";
const router = express.Router();
router.get("/students", getAllstudents);
export { router as studentRouter };
