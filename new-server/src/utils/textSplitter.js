export const splitText = (text , chunkSize = 100 , chunkOverlap = 20) =>{

    if (!text || typeof text !== "string") {
        throw new Error("Invalid text provided for splitting.");
    }

    const trimedText = text.trim();

    if (trimedText.length === 0 ) {
        return [];
    }

    if (chunkOverlap >= chunkSize) {
        chunkOverlap = Math.floor(chunkSize * 0.2);
    }

    const chunks = [];
    let startIndex = 0;
    const step = chunkSize - chunkOverlap;

    while(startIndex < trimedText.length){
        const chunk = trimedText.slice(startIndex ,  startIndex + chunkSize);
        chunks.push(chunk);
        startIndex += step;
    }

    console.log("Text splitting completed. Total chunks created:", chunks.length);
    return chunks;

}
