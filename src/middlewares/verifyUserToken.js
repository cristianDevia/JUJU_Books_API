import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const verifyUserToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (token) {
      const verifyToken = jwt.verify(token, config.signatureToken);

      const user = await User.findById(verifyToken.id);

      if (!user)
        return res.status(404).json({ message: "Usuario no encontrado" });

      return res.json(user);
    } else {
      res.status(403).json({ message: "No token provider" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
