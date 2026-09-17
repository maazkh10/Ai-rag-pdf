// import { searchChunks } from "../controllers/vector.controller.js";


import { searchSimilar } from "./vector.service.js";
import { generateEmbedding } from "../ai/models/embedding.js";

import { genrateText } from "../ai/models/llm.js";


export const chatWithPdf = async  (question) =>{

    // user question into emedinbg
    const quertEmedding = await generateEmbedding(question)

    // search related thing 
    const relatedchunk = await searchSimilar( quertEmedding , 5)

console.log("QUESTION:", question);
console.log("RETRIEVED CHUNKS:", relatedchunk);
    const context = relatedchunk.map((itm)=> itm.text)
    .join("\n\n");


    console.log("Context" , context)
    // this promopt i took from cahtgpt 
    const prompt = `
You are a helpful AI assistant that answers questions
based only on the provided PDF context.

PDF Context:
${context}

User Question:
${question}

Instructions:
- Answer using the PDF context.
- Do not make up information.
- If the answer is not present in the context, say you don't know.
- Keep the answer clear and concise.

Answer:
`;

// send promt to llm 

const answer = await genrateText(prompt)

console.log("ANser frm ollama" , answer)
return{
    question , 
    answer , 
    source : relatedchunk
}
}