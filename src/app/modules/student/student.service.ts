import { IStudent } from "./student.interface";
import Student from "./student.models";

const createStudentIntoDb = async (student: IStudent) => {
  try {
    const res = await Student.create(student);
    return res;
  } catch (error) {
    throw new Error(error as any);
  }
};
const getAllstudentsFromDB = async () => {
  try {
    const students = await Student.find({});
    return students;
  } catch (error) {
    throw new Error(error as any);
  }
};
const getSingleStudentFromDB = async (studentId: string) => {
  try {
    const student = await Student.findById(studentId);
    return student;
  } catch (error) {
    throw new Error(error as any);
  }
};
export const StudentServices = {
  createStudentIntoDb,
  getAllstudentsFromDB,
  getSingleStudentFromDB,
};
