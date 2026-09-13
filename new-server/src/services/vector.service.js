// this ma making for storing that vectore localy 
const vectorStore = [];

/**
 * Helper function to calculate Cosine Similarity (dot product) between two vectors.
 * Higher score = more similar meaning (closer to 1.0).
 */


const Cosine = (vecA , vecB) =>{

    // if(!vecA || !vecB) return 0 ;
if (!vecA || !vecB || !Array.isArray(vecA) || !Array.isArray(vecB)) return 0;

    let dotProduct = 0;

    for(let i = 0 ; i < vecA.length; i ++){
        dotProduct += vecA[i] * vecB[i]
    }

    console.log(dotProduct)
    return dotProduct
}


export const saveEmbedings = async (embeddedChunks) =>{
    vectorStore.push(...embeddedChunks)

    console.log(vectorStore)
    
    console.log(vectorStore.length)
    return{
        success : true,
        totalStored: vectorStore.length
    }
}

export const searchSimilar = async (queryEmbedding , topK = 5) =>{
    const scoredChunks = vectorStore.map((item)=>{
        const Similarity = Cosine(queryEmbedding , item.embedding)

        console.log(item.text)
        return{
            text: item.text , 
            score : Similarity
        }
    })


    scoredChunks.sort((a , b) => b.score - a.score)

    return scoredChunks.slice(0 , topK)
}