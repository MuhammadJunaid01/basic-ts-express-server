import { Schema, model } from "mongoose";
import { IStudent } from "./student.interface";

const studentSchema = new Schema<IStudent>({
  id: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  contactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    required: false,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  permanentAddress: { type: String, required: true }, // Corrected typo
  presentAddress: { type: String, required: true },
  guardian: {
    fatherName: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    motherName: { type: String, required: true },
    motherContactNo: { type: String, required: true },
    motherOccupation: { type: String, required: true },
  },
  localGuardian: {
    name: { type: String, required: false },
    occupation: { type: String, required: false },
    contactNo: { type: String, required: false },
  },
  profileImage: { type: String, required: false },
  isActive: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
  },
});

const Student = model<IStudent>("Student", studentSchema);
export default Student;
