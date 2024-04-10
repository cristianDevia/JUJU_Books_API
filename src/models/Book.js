import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: String,
    author: String,
    publicationYear: String,
    state: String,
  },
  { collection: "Books", timestamps: true, versionKey: false }
);

export default model("Book", bookSchema);
