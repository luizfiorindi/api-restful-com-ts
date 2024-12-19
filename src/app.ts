require("dotenv").config();
import express from "express";
import config from "config";

const app = express();

//JSON middleware
app.use(express.json());

// Logger
import Logger from "../config/logger";

// Middlewares
import morganMiddleware from "./middlewares/morganMiddleware";

//App Port
const port = config.get<number>("port");

// DB
import db from "../config/db";

//APP Routes
import router from "./router";

app.use(morganMiddleware);
app.use("/api/", router);

app.listen(3000, async () => {
  await db();
  Logger.info(`Server is running on port: ${port}`);
});
