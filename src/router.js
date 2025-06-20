import { Router } from "express";
import { userauthController, usercreateController, userfetchController } from "./user/controller.js";

const userRouter = Router(); 

userRouter.get("/fetch",userfetchController);

userRouter.post("/create", usercreateController);

userRouter.post("/auth", userauthController);


export {userRouter};