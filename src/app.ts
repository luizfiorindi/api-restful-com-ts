import express from "express";
import config from "config";

const app = express();

//JSON middleware
app.use(express.json());

//App Port
const port = config.get<number>("port");

// DB
import db from "../config/db";

//APP Routes
import router from "./router";
app.use("/api/", router);

app.listen(3000, async () => {
  await db();
  console.log(`Server is running on port: ${port}`);
});
