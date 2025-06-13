import { Request, Response } from "express";
import { Type } from "../models/models";

class TypeController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    const type = await Type.create({ name });
    res.status(200).json(type)
  }
  async getAll(req: Request, res: Response) {
    const types = await Type.findAll()
    res.json(types)
  }
}

export default new TypeController();
