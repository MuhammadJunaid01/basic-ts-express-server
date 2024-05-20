"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = exports.createStudentZodSchema = exports.studentValidatorSchema = exports.userSchema = exports.localGuardianSchema = exports.guardianSchema = exports.bloodGroupSchema = void 0;
const zod_1 = require("zod");
exports.bloodGroupSchema = zod_1.z.enum([
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
]);
exports.guardianSchema = zod_1.z.object({
    fatherName: zod_1.z.string(),
    fatherOccoupation: zod_1.z.string(),
    fatherContactNo: zod_1.z.string(),
    motherName: zod_1.z.string(),
    motherOccoupation: zod_1.z.string(),
    motherContactNo: zod_1.z.string(),
});
exports.localGuardianSchema = zod_1.z.object({
    name: zod_1.z.string(),
    occoupation: zod_1.z.string(),
    address: zod_1.z.string(),
    contactNo: zod_1.z.string(),
});
exports.userSchema = zod_1.z.object({
    fisrtName: zod_1.z.string(),
    middleName: zod_1.z.string(),
    lastName: zod_1.z.string(),
});
exports.studentValidatorSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: exports.userSchema,
    gender: zod_1.z.enum(["male", "female"]),
    dateOfBirth: zod_1.z.string(),
    contactNo: zod_1.z.string(),
    email: zod_1.z.string(),
    bloodGroup: exports.bloodGroupSchema.optional(),
    presentAddress: zod_1.z.string(),
    parmanentAddress: zod_1.z.string(),
    guardian: exports.guardianSchema,
    localGuardian: exports.localGuardianSchema,
    profileImage: zod_1.z.string().optional(),
    isActive: zod_1.z.enum(["active", "inactive"]),
});
exports.createStudentZodSchema = zod_1.z.object({
    body: exports.studentValidatorSchema,
});
const validateRequest = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.parseAsync({
            body: req.body,
        });
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            next(error);
        }
        else {
            next(error);
        }
    }
});
exports.validateRequest = validateRequest;
