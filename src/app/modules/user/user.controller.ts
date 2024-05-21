import { Response, Request, NextFunction } from "express";
import { createUserIntoDB, getSingleUserFromDB } from "./user.service";
import mongoose from "mongoose";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.body;
    const createdUser = await createUserIntoDB(user);

    res.status(201).json({
      success: true,
      message: "successfully user created.",
      data: createdUser,
    });
  } catch (error) {
    // console.log("error", error);
    next(error);
  }
};
export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userID = req.params.userId;
    if (!mongoose.Types.ObjectId.isValid(userID)) {
      throw new Error("Invalid ID format.");
    }
    const user = getSingleUserFromDB(userID);
    res.json(user);
  } catch (error) {
    // console.log("error from ", error);
    next(error);
  }
};
