import {Router} from "express";
import employmentCenterKeepingRouter from "./employmentCenter";

const apiRouter = new Router();

apiRouter.use("/employmentCenter", employmentCenterKeepingRouter);

export default apiRouter;