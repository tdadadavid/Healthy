import { Router } from "express";
import {controllerHandler} from "../core";
import { forgotPassword, resetPassword, signIn, signUp } from "./auth.module";

export const authRouter = Router();


authRouter
    .post("/signIn", controllerHandler.handle(signIn.signIn))
    .post("/signUp", controllerHandler.handle(signUp.signUp))
    .post("/forgotPassword", controllerHandler.handle(forgotPassword.forgotPassword))
    .post("/resetPassword", controllerHandler.handle(resetPassword.reset))