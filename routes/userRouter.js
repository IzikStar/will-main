import express from "express";
import { loginHandler } from "../Controllers/userController.js";

const router = express.Router();

router.route("/:password").get(loginHandler);

export default router;
