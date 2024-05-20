/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
  id: { type: String, required: true },
  name: {
    fisrtName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  contactNo: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: false,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  guardian: {
    fatherName: {
      type: String,
      required: true,
    },
    fatherContactNo: {
      type: String,
      required: true,
    },
    fatherOccoupation: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    motherContactNo: {
      type: String,
      required: true,
    },
    motherOccoupation: {
      type: String,
      required: true,
    },
  },
  localGuardian: {
    name: {
      type: String,
      required: false,
    },
    occoupation: {
      type: String,
      required: false,
    },
    contactNo: {
      type: String,
      required: false,
    },
  },
  profileImage: {
    type: String,
    required: false,
  },
  isActive: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
  },
});
const Student = (0, mongoose_1.model)("Student", studentSchema);
exports.default = Student;
