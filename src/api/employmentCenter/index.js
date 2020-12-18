import {Router} from "express";
import employmentCenterKeepingControler from "./controler";

const employmentCenterKeepingRouter = new Router();
employmentCenterKeepingRouter.get("/", employmentCenterKeepingControler.get);
employmentCenterKeepingRouter.get("/:id", employmentCenterKeepingControler.getById);
employmentCenterKeepingRouter.post("/", employmentCenterKeepingControler.post);
employmentCenterKeepingRouter.delete("/:id",employmentCenterKeepingControler.delete);
employmentCenterKeepingRouter.patch("/:id", employmentCenterKeepingControler.patch);

export default employmentCenterKeepingRouter;