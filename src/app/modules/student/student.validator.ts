import { NextFunction, Response, Request } from "express";
import { z, AnyZodObject, ZodEffects, ZodError } from "zod";

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
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

export const localGuardianSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
});

export const userSchema = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
});

export const studentValidatorSchema = z.object({
  id: z.string({
    required_error: "id is required feild",
  }),
  name: userSchema,
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string(),
  contactNo: z.string(),
  email: z.string(),
  bloodGroup: bloodGroupSchema.optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(), // Corrected typo
  guardian: guardianSchema,
  localGuardian: localGuardianSchema.optional(),
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
      await schema.parseAsync(req);
      next();
    } catch (error: any) {
      // console.log(error);
      if (error instanceof ZodError) {
        res.status(400).json({
          error: "Invalid Data",
          details: error.errors.map((err) => err.message),
        });
      } else {
        next(error);
      }
    }
  };
