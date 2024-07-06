import { CreateLogin ,GetLogin} from "../Controllers/logincontroller.js";
import express from "express";

const router = express.Router();

router.post("/login", CreateLogin);
router.get("/login", GetLogin);

export default router;
