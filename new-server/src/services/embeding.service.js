import { generateEmbedding } from "../ai/models/embedding.js";

export const generateEmbeddingsForChunks = async (chunks) =>{

    const embededchunks = []

    for (const chunk of chunks) {
        const embedding = await generateEmbedding(chunk);

        embededchunks.push({
            text: chunk,
            embedding: embedding
        })
    }
    return embededchunks
}