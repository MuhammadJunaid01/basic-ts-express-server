import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";
const main = async () => {
  try {
    const dbUri = config.database_url;
    if (!dbUri) {
      throw new Error("Database url is not defined.");
    }
    await mongoose.connect(dbUri, {});
    console.log("MongoDB connected successfully");

    app.listen(config.port, () => {
      console.log(`server running on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};
main();
