import { Router } from "express";
import typeController from "../controllers/typeController";

const typeRouter = Router();

typeRouter.post("/create", typeController.create);
typeRouter.get("/getAll", typeController.getAll);

export default typeRouter;
