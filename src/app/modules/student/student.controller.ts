import { Request, Response } from "express";
export const getAllstudents = (req: Request, res: Response) => {
  res.send("all users");
};
export const createStudent = (req: Request, res: Response) => {
  res.send("hello");
};
