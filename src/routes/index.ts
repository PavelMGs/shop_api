import { Router } from "express";
import userRouter from "./userRouter";
import brandRouter from "./brandRouter";
import typeRouter from "./typeRouter";
import deviceRouter from "./deviceRouter";

const router = Router()

router.use("/user", userRouter);
router.use("/device", deviceRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);

export default router;  