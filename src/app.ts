import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { studentRouter } from "./app/modules/student/student.route";
import { ZodError } from "zod";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", studentRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("laqll;");
});
const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ZodError) {
    const errorMessages = error.errors.map((issue) => {
      const message = `${issue.path.join(".")} is ${issue.message}`;
      return message;
    });
    res.status(400).json({ error: "Invalid Data", details: errorMessages });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
app.use(errorHandler);

export default app;
