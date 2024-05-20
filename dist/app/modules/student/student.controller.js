/* eslint-disable no-undef */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = exports.getAllstudents = void 0;
const getAllstudents = (req, res) => {
  res.send("all users");
};
exports.getAllstudents = getAllstudents;
const createStudent = (req, res) => {
  res.send("hello");
};
exports.createStudent = createStudent;
