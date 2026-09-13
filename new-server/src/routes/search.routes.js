import express from "express"

import {ingestChunks , searchChunks} from "../controllers/vector.controller.js"


const router = express.Router()

router.post("/ingest" , ingestChunks)
router.post("/search" , searchChunks)
export default router