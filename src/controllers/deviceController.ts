import { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import path from "path";
import { v4 } from "uuid";
import { Device } from "../models/models";
import ApiError from "../error/ApiEror";

class DeviceController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const img = req.files?.img as fileUpload.UploadedFile;
      const fileName = `${v4()}.jpeg`;
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        info,
        img: fileName,
      });

      res.json(device);
    } catch (error) {
      next(ApiError.badRequest((error as Error).message))
    }
  }
  async getAll(req: Request, res: Response) {
    const devices = await Device.findAll()
    res.json(devices)
  }
  async getById(req: Request, res: Response) {}
}

export default new DeviceController();
