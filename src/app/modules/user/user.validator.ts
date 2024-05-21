import { NextFunction, Response, Request } from "express";
import { AnyZodObject, ZodEffects, ZodError, z } from "zod";

const zodUserSchema = z.object({
  name: z.object({
    firstName: z
      .string({
        required_error: "firstName is required.",
      })
      .min(1)
      .max(8),
    middleName: z
      .string({
        required_error: "middleName is required.",
      })
      .min(1)
      .max(8),
    lastName: z
      .string({
        required_error: "lastName is required.",
      })
      .min(1)
      .max(8),
  }),
  email: z
    .string({ required_error: "email is required" })
    .email({ message: "email is inavlide" }),
  password: z
    .string({
      required_error: "password is requird feild.",
    })
    .min(8, { message: "password minimum 8 charcter." })
    .max(11, { message: "password max value is 11" }),
});
export const cretaStudentValidatorSchema = z.object({
  body: zodUserSchema,
});

export const userValidator = (
  schema: AnyZodObject | ZodEffects<AnyZodObject>,
) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await schema.parseAsync(req);
      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({
          error: "d Data",
          details: error.errors.map((err) => err.message),
        });
      } else {
        next(error);
      }
    }
  };
};
