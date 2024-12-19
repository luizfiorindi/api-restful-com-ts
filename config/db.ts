import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
  const dbURI = config.get<string>("dbURI");

  try {
    await mongoose.connect(dbURI);
    Logger.info("Connected to the database");
  } catch (e) {
    Logger.error("Could not connect to the database");
    Logger.error(`Error: ${e}`);
    process.exit(1);
  }
}

export default connect;
