require("dotenv").config();
import mongoose from "mongoose";

const USER = process.env.MONGOATLAS_USER;
const PASSWORD = process.env.MONGOATLAS_PASSWORD;
const DB = process.env.MONGOATLAS_DB;
const APPNAME = process.env.MONGOAPPNAME;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB}.5wjlgjq.mongodb.net/?retryWrites=true&w=majority&appName=${APPNAME}`;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connection Successful"))
  .catch((error) => error);
