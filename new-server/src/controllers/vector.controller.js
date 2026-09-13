import { generateEmbedding  } from "../ai/models/embedding.js";

import { generateEmbeddingsForChunks } from "../services/embeding.service.js";

import { saveEmbedings  , searchSimilar} from "../services/vector.service.js";


export const ingestChunks = async (req , res) =>{

    const {chunks} = req.body;


    if (!chunks ||!Array.isArray(chunks) || !chunks.length === 0 ) {
        return res.status(400).json({
            success: false,
            error: "pls entear the chunks in array"
        })
    }

    const eamedingchunks = await generateEmbeddingsForChunks(chunks)

    const ressave = await saveEmbedings(eamedingchunks)

    return res.status(200).json({
        success : true,
    message: "Chunks processed and stored successfully.",
    data : ressave
    })
}

export const searchChunks = async(req , res) =>{
    try {
        const {query} = req.body

        if (!query || query.trim() === "") {
            return req.status(400).json({
                success: false,
                message : "pls provide the query "
            })
        }

        const usearQues = await generateEmbedding(query)

        const result = await searchSimilar(usearQues)

        return res.status(200).json({
            success : true,
            message : "get the data succesfuul",
            query, 
            result
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            error: error.message
        })
    }
}