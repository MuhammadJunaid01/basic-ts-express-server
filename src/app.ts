import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentRouter } from "./app/modules/student/student.route";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", studentRouter);
app.get("/", (req: Request, res: Response) => {
  res.send(";laqll;");
});

export default app;
