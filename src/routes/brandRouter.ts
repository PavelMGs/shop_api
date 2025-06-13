import { Router } from "express";
import brandController from "../controllers/brandController";

const brandRouter = Router()

brandRouter.post("/create", brandController.create);
brandRouter.get("/getAll", brandController.getAll);

export default brandRouter;  