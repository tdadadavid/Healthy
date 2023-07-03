import { Request, Response, Router } from "express";
import { HttpStatus } from "../core";

export const appRouter = Router();

appRouter.get("/health", (req: Request, res: Response) => {
    const appOptions = {
        code: HttpStatus.OK,
        message: "Application running successfully",
    };

    res.status(appOptions.code).json(appOptions);
});