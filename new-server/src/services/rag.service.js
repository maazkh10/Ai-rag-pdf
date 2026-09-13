import { genrateText } from "../ai/models/llm.js";
import { searchSimilar } from "./vector.service.js";
import { generateEmbedding } from "../ai/models/embedding.js";



export const answerQuestion = async (question , topk=4) => {
    try {
        const quesVector = await generateEmbedding(question)

        const match = await searchSimilar(quesVector , topk)

        if (!match || match.length === 0 ) {
            return{
                answer: "No relevant document context found. Please upload a PDF first.",
        sources: [],
            }
        }


        const contextText = match.map((mat , idx)=> `[Chunk ${idx + 1}: ${mat.text}]`)
        .join("\n\n");

        const prompt = `You are a helpful QA assistant answering questions based on uploaded documents.
Answer the Question using ONLY the provided Context below. 
If the answer cannot be determined from the Context, respond strictly with: "I cannot find the answer in the provided document."

Context:
${contextText}

Question:
${question}

Answer:`;

const llmAnswer = await genrateText (prompt)

return{
    answer : llmAnswer,
    sources: match.map((m)=>({
        text: m.text,
        score : m.score
    }))
}
    } catch (error) {
 console.error("Errro is rag searvice.js" , error)
 throw error       
    }
}