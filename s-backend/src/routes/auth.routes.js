import express from "express";
import passport from "passport";
import { googleCallback, login, register } from "../controllers/auth.controllers.js";
import { validateLoginUser, validateRegisterUser } from "../validators/app.validators.js";

const router = express.Router();

router.post("/register", validateRegisterUser, register);
router.post("/login", validateLoginUser, login);

router.get(
    "/google",
    passport.authenticate("google", { scope: [ "profile", "email" ] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "http://localhost:5173/login"
    }),
    googleCallback
);

router.get('/me', authenticateUser, getMe);

export default router;
