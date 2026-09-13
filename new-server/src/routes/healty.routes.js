
import express from "express";

const router = express.Router()

router.get("/api/health" , (req , res)=>{
    res.status(200).json({
        success: true,
        message: "Server is healthy"
    })
})

export default router;