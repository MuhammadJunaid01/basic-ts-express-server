import { NextFunction, Response, Request } from "express";
import { AnyZodObject, ZodEffects, ZodError, z } from "zod";
export const bloodGroupSchema = z.enum([
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
]);
export const guardianSchema = z.object({
  fatherName: z.string(),
  fatherOccoupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccoupation: z.string(),
  motherContactNo: z.string(),
});
export const localGuardianSchema = z.object({
  name: z.string(),
  occoupation: z.string(),
  address: z.string(),
  contactNo: z.string(),
});
export const userSchema = z.object({
  fisrtName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
});
export const studentValidatorSchema = z.object({
  id: z.string(),
  name: userSchema,
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string(),
  contactNo: z.string(),
  email: z.string(),
  bloodGroup: bloodGroupSchema.optional(),
  presentAddress: z.string(),
  parmanentAddress: z.string(),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(["active", "inactive"]),
});
export const createStudentZodSchema = z.object({
  body: studentValidatorSchema,
});
export const validateRequest =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        next(error);
      } else {
        next(error);
      }
    }
  };
