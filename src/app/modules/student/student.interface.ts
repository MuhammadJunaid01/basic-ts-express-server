import { model, Schema } from "mongoose";

export type BloodGroup =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";
export type Guardian = {
  fatherName: string;
  fatherOccoupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccoupation: string;
  motherContactNo: string;
};
export type LocalGuardian = {
  name: string;
  occoupation: string;
  address: string;
  contactNo: string;
};
export type UserName = {
  fisrtName: string;
  middleName: string;
  lastName: string;
};
export interface IStudent {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  contactNo: string;
  email: string;
  bloodGroup?: BloodGroup;
  presentAddress: string;
  parmanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: "active" | "inactive";
}
