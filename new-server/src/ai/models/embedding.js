import { pipeline } from "@huggingface/transformers";


let extract= null;

export const generateEmbedding = async (text) =>{

    if (!extract) {
      extract =   await  pipeline('feature-extraction' , "Xenova/all-MiniLM-L6-v2")
    }

    const output = await extract(text , {pooling : "mean" , normalize : true})

    return Array.from(output.data)
}