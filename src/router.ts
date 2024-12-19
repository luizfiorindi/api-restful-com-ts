import { Router, Request, Response, NextFunction } from "express";
import { createMovie } from "./controllers/movieController";
import { validate } from "./middlewares/handleValidation";
import { movieCreatevalidation } from "./middlewares/movieValidation";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working");
  })
  .post(
    "/movie",
    movieCreatevalidation(),
    (req: Request, res: Response, next: NextFunction) => {
      validate(req, res, next);
    },
    async (req: Request, res: Response) => {
      try {
        await createMovie(req, res);
      } catch (error: any) {
        res.status(500).send(error.message);
      }
    }
  );
