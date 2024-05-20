"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const student_validator_1 = require("./student.validator");
const router = express_1.default.Router();
exports.studentRouter = router;
router.get("/students", student_controller_1.getAllstudents);
router.post("/create/student", (0, student_validator_1.validateRequest)(student_validator_1.createStudentZodSchema), student_controller_1.createStudent);
