import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbURI = config.get<string>("dbURI");

  try {
    await mongoose.connect(dbURI);
    console.log("Connected to the database");
  } catch (e) {
    console.log("Could not connect to the database");
    console.log(`Error: ${e}`);
  }
}

export default connect;
