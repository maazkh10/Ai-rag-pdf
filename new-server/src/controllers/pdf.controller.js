
import {processPdfFileService} from "../services/pdf.service.js";
export const UploadPdf = async (req , res) =>{
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            })
        }
        

        const pdfData = await processPdfFileService(req.file.path)

        res.status(200).json({
            success: true,
            message: "File uploaded and processed successfully",
            file:{
                originalname : req.file.originalname,
                size : req.file.size,
                filename : req.file.filename,
                path : req.file.path
            },
            data: pdfData
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error uploading file",
            error: error.message
        });
    }
}