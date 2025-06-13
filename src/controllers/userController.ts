import { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiEror";

class UserController {
  async registration(req: Request, res: Response) {}
  async login(req: Request, res: Response) {}
  async auth(req: Request, res: Response, next: NextFunction) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("No id"));
    }
    res.json(id);
  }
}

export default new UserController();
