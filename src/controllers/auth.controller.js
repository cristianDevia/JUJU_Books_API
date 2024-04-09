import jwt from "jsonwebtoken";
import User from "../models/User";
import config from "../config";

export const signUp = async (req, res) => {
  try {
    if (req && req.body) {
      const { email, password } = req.body;

      const emailExists = await User.findOne({ email: email });
      if (emailExists) return res.json({ message: "El usuario ya existe" });

      const newUser = new User({
        email,
        password: await User.encryptPassword(password),
      });

      const savedUser = await newUser.save();

      const token = jwt.sign({ id: savedUser._id }, config.signatureToken, {
        expiresIn: 86400, // 24 hours = 86400 seconds
      });

      res.json({ token });
    }
  } catch (error) {
    res.json(error);
  }
};

export const signIn = async (req, res) => {
  try {
    if (req && req.body) {
      const { email, password } = req.body;
      const userExist = await User.findOne({ email });

      if (userExist) {
        const matchPassword = await User.comparePassword(
          password,
          userExist.password
        );

        if (matchPassword) {
          const token = jwt.sign({ id: userExist._id }, config.signatureToken, {
            expiresIn: 86400,
          });

          res.json({ token });
        } else {
          res
            .status(401)
            .json({ token: null, message: "Contraseña incorrecta" });
        }
      } else {
        res.status(400).json({ message: "Usuario no encontrado" });
      }
    }
  } catch (error) {
    res.json(error);
  }
};
