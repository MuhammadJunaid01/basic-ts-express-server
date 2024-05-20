import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";

export const getAllstudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const students = await StudentServices.getAllstudentsFromDB();
    res.status(201).json({
      success: true,
      message: "successfully retireve all students.",
      data: students,
    });
  } catch (error) {
    next(error);
  }
};
export const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const student = req.body;
    const newStudent = await StudentServices.createStudentIntoDb(student);
    res.status(201).json({
      success: true,
      message: "successfully created student.",
      data: newStudent,
    });
  } catch (error) {
    next(error);
  }
};
export const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.studentId;
    const student = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "successfully retirev single student.",
      data: student,
    });
  } catch (error) {
    next(error);
  }
};
