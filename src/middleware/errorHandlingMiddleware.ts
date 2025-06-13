import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiEror";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Unhandled error" });
  }
};
