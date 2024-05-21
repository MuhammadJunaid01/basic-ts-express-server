import mongoose from "mongoose";
import Student from "../student/student.models";
import { IUser } from "./user.inetrface";
import User from "./user.model";

export const createUserIntoDB = async (user: IUser) => {
  try {
    const res = await User.create(user);
    return res;
  } catch (error) {
    // console.log("error from service", error);
  }
};
export const getSingleUserFromDB = async (userID: string) => {
  try {
    const user = await User.findOne({ _id: userID });
    if (!user) {
      throw new Error("something wrong!");
    }
    return user;
  } catch (error) {
    throw new Error(error as any);
  }
};
