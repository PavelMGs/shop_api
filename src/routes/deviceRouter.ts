import { Router } from "express";
import deviceController from "../controllers/deviceController";

const deviceRouter = Router();

deviceRouter.post("/create", deviceController.create);
deviceRouter.get("/getAll", deviceController.getAll);
deviceRouter.get("/:id", deviceController.getById);

export default deviceRouter;
