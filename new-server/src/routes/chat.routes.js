
import express from "express";

const router = express.Router()

import { chatcontroller } from "../controllers/chat.controller.js";

router.post("/" , chatcontroller)

export default router