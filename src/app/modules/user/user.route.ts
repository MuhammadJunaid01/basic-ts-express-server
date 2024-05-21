import express from "express";
import { createUser, getSingleUser } from "./user.controller";
import { cretaStudentValidatorSchema, userValidator } from "./user.validator";
const router = express.Router();
router.post(
  "/create-user",
  userValidator(cretaStudentValidatorSchema),
  createUser,
);
router.get("/user/:userId", getSingleUser);
export { router as userRouter };
