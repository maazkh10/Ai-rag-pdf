const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || "http://localhost:11434";
const MODEL_NAME = process.env.LLM_MODEL 
|| "qwen2.5:1.5b";


export async function genrateText(prompt , option={}) {
    try {
        const  response = await fetch(`${OLLAMA_BASE_URL}/api/generate`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                prompt: prompt,
                stream: false, 
                option:{
                    temperature: option.temperature ?? 0.2,
                    num_predict: option.maxToken ?? 521,
                },
            }),

        });

        if (!response.ok) {
            throw new Error(`Ollama HTTP Error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        console.log(data)
        console.log(data.response)
        return data.response
    } catch (error) {

        console.error("Error in llm.js(genrate.js)", error.message)      
        throw error;
    }
}