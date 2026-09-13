// import fs from "fs";
// import { createRequire } from "module";

// const require = createRequire(import.meta.url);
// const pdfParseModule = require("pdf-parse");

// export const extractpdfText = async (filePath) => {
//     try {
//         const dataBuffer = fs.readFileSync(filePath);

//         // Dynamically find the parser function or constructor
//         let pdfData;

//         if (typeof pdfParseModule === "function") {
//             // Standard function export
//             pdfData = await pdfParseModule(dataBuffer);
//         } else if (pdfParseModule.PDFParse && typeof pdfParseModule.PDFParse === "function") {
//             // Class-based export (v2+)
//             const parser = new pdfParseModule.PDFParse();
//             pdfData = await parser.parse(dataBuffer);
//         } else if (typeof pdfParseModule.default === "function") {
//             // Default export fallback
//             pdfData = await pdfParseModule.default(dataBuffer);
//         } else {
//             throw new Error("Unable to locate a valid parsing function in pdf-parse module.");
//         }
// console.log("Raw Extracted Data:", pdfData);
//         return {
//             text: pdfData.text,
//             numPages: pdfData.numpages || pdfData.numPages || pdfData.pages,
//             info: pdfData.info
//         };
//     } catch (error) {
//         console.error("Error extracting text from PDF:", error);
//         throw error;
//     }
// };


import fs from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

export const extractpdfText = async (filePath) => {
    try {
        const dataBuffer = fs.readFileSync(filePath);

        // Run pdf-parse directly on the file buffer
        const pdfData = await pdfParse(dataBuffer);

        return {
            text: pdfData.text,
            numPages: pdfData.numpages || pdfData.numPages,
            info: pdfData.info
        };
    } catch (error) {
        console.error("Error extracting text from PDF:", error);
        throw error;
    }
};