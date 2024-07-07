import {Login ,Signup,getUser,Logout } from "../Controllers/Auth.js";
import express from "express";

const router = express.Router();

router.get('/signup',getUser)
router.post("/signup", Signup);
router.post("/login", Login);
router.post('/logout', Logout);

export default router;

