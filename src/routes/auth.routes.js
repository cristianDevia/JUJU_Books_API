import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { verifyUserToken } from "../middlewares/verifyUserToken";

const router = Router();

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);
router.get("/verify", verifyUserToken);

export default router;
