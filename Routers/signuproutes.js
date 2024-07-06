import { CreateLogin ,GetLogin} from "../Controllers/logincontroller.js";
import express from "express";

const router = express.Router();

router.post("/signup", CreateLogin);
router.get("/signup", GetLogin);

export default router;
