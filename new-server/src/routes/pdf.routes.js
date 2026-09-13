import express from "express";

import upload  from "../utils/file.utils.js";

import { UploadPdf } from "../controllers/pdf.controller.js";

const router = express.Router()

// router.post("/upload" , upload.single("file") ,(req , res)=>{
//     res.status(200).json({
//         success :true,
//         message: "File uploaded successfully",
//         file: req.file
//     })
// })


router.post("/upload" , upload.single("file") , UploadPdf)
export default router;
