//imports
import { Router, Request,  Response } from "express";

//Creating route for homepage of the backend
const backendHomepageRouter = Router();

backendHomepageRouter.get("/", (req: Request, res: Response) => {
    res.send("Umm, Excuse Me!! What are you doing here.");
});

export default backendHomepageRouter;