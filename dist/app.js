"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./app/modules/student/student.route");
const zod_1 = require("zod");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1", student_route_1.studentRouter);
app.get("/", (req, res) => {
    res.send("laqll;");
});
const errorHandler = (error, req, res, next) => {
    if (error instanceof zod_1.ZodError) {
        const errorMessages = error.errors.map((issue) => {
            const message = `${issue.path.join(".")} is ${issue.message}`;
            return message;
        });
        res.status(400).json({ error: "Invalid Data", details: errorMessages });
    }
    else {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
app.use(errorHandler);
exports.default = app;
