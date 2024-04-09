import mongoose from "mongoose";
import config from "./config";

const { USER, PASSWORD, DB, DB_NAME, APPNAME } = config;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB}.5wjlgjq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=${APPNAME}`;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connection Successful"))
  .catch((error) => error);
