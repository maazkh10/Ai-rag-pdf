import { chatWithPdf } from "../services/chat.service.js";


export const chatcontroller = async (req , res ) =>{
    try {
        const{question} = req.body;

        if (!question || question.trim() === "") {
            return res.status(400).json({
                success : false,
                error: "Pls proviode the questy"
            })
        }


        const result = await chatWithPdf(question)

        return res.status(200).json({
            success : true,
            data : result
        })
    } catch (error) {
        console.error("caht route thing errror" , error)
         return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}