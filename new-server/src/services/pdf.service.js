

import { extractpdfText } from "../utils/pdfLoader.js";
import { splitText } from "../utils/textSplitter.js";

import { generateEmbeddingsForChunks } from "./embeding.service.js";

import { saveEmbedings } from "./vector.service.js";

export const processPdfFileService = async(filePath) =>{

    const parseData = await extractpdfText(filePath)

    if (!parseData || !parseData.text || parseData.text.trim().length === 0) {
        throw new Error("No text found here in this pdf ")
    }

    // const  chunk = splitText(parseData.text , 100 , 20);
    // return {
    //     text: parseData.text,
    //     // totalpages: parseData.totalpages,
    //     numPages: parseData.numPages,
    //     info: parseData.info,
    //     orignalname: parseData.orignalname,
    //     chunks: chunk
    // }

const chunk = splitText(
    parseData.text,100,20
)


const eambedding = await generateEmbeddingsForChunks(chunk)

const savevector = await saveEmbedings(eambedding)


return {
    text: parseData.text,
    numPages: parseData.numPages,
    info: parseData.info,
    chunks : chunk,
    embedding:{
        total  :eambedding.length
    },
    vectorStore: savevector
}


}