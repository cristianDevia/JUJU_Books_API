require("dotenv").config();

export default {
  USER: process.env.MONGOATLAS_USER,
  PASSWORD: process.env.MONGOATLAS_PASSWORD,
  DB: process.env.MONGOATLAS_DB,
  APPNAME: process.env.MONGO_APP_NAME,
  DB_NAME: process.env.MONGO_DB_NAME,
  signatureToken: process.env.SECRET_PHRASE,
};
