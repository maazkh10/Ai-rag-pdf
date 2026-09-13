// import { generateEmbedding } from "./ai/models/embedding.js";

// async function runTest() {
    
//     console.log("loading model")

//     const text = "hello maaz here herejigiguiy biyg8gert "

//     const startTime = Date.now()

//     const vector1 = await generateEmbedding(text)

//     const endTime = Date.now()

// console.log("fist call")

// console.log(`Time taken: ${endTime - startTime} ms (Model download/load + inference)`)
// console.log(`vector 1 ${vector1.length}`)

// console.log(`fist 5 num ` , vector1.slice(0, 5))


//     const startTime2 = Date.now()

//     const vector2 = await generateEmbedding(text)

//     const endTime2 = Date.now()
// console.log("second call")

// console.log(`Time taken: ${endTime2 - startTime2} ms (Model download/load + inference)`)
// console.log(`vector 1 ${vector2.length}`)

// console.log(`fist 5 num ` , vector2.slice(0, 5))



// } 


// runTest()





// this test was for embeding 
import { generateEmbeddingsForChunks } from "./services/embeding.service.js";


const sampleChunks = [
  "Retrieval-Augmented Generation (RAG) improves LLM responses.",
  "Embeddings convert text into dense mathematical vectors."
];


async function runTest() {
    const result = await generateEmbeddingsForChunks(sampleChunks)

    console.log("result data" , result.length)

    console.log("sample data outpur" , {
        text: result[1].text,
        embeddingLength: result[1].embedding.length,
        sampleVector : result[0].embedding.slice(0 , 9)
    })
}


// runTest()


// this one is for that vectore store and similarity 

import { generateEmbedding } from "./ai/models/embedding.js";
// import { generateEmbeddingsForChunks } from "./services/embeding.service.js";
import { saveEmbedings , searchSimilar } from "./services/vector.service.js";


// const pdfChunks = [
//   "Node.js is an open-source, cross-platform JavaScript runtime environment.",
//   "Retrieval-Augmented Generation (RAG) combines document search with LLM generation.",
//   "Pinecone and Qdrant are popular managed vector databases used in production."
// ];

const pdfChunks = [
  "Node.js is an open-source, cross-platform JavaScript runtime environment.",
  "Retrieval-Augmented Generation (RAG) combines document search with LLM generation.",
  "Pinecone and Qdrant are popular managed vector databases used in production.",
  "Node.js executes JavaScript code outside a web browser using V8.",
  "The V8 engine compiles JavaScript directly into native machine code.",
  "Node.js uses an event-driven, non-blocking I/O model for efficiency.",
  "Asynchronous programming in Node.js relies heavily on event loops.",
  "The event loop allows Node.js to perform non-blocking I/O operations.",
  "Express.js is a minimal and flexible Node.js web application framework.",
  "RESTful APIs allow clients and servers to exchange JSON data asynchronously.",
  "Middlewares in Express process requests before they hit route handlers.",
  "Node.js streams process large datasets efficiently without overloading RAM.",
  "Buffers in Node.js handle binary data directly in memory.",
  "The fs module in Node.js provides utilities for reading and writing files.",
  "NPM is the default package manager for the Node.js ecosystem.",
  "Docker containers package applications and dependencies into isolated environments.",
  "PostgreSQL is a powerful relational database supporting SQL queries.",
  "MongoDB is a popular NoSQL database that stores data in JSON-like documents.",
  "Redis is an in-memory key-value data store used for high-speed caching.",
  "JSON Web Tokens (JWT) are used for stateless user authentication.",
  "Vector embeddings are numerical representations of data in high-dimensional space.",
  "An embedding model maps text, images, or audio into dense numerical vectors.",
  "Dense vectors capture the semantic meaning of human language accurately.",
  "Tokens are the basic units of text processed by natural language models.",
  "Word embeddings convert words into numerical vectors based on context.",
  "Transformers are a neural network architecture driving modern AI models.",
  "Attention mechanisms allow models to focus on relevant parts of context.",
  "Cosine similarity measures the angle between two multi-dimensional vectors.",
  "Euclidean distance measures the straight-line distance between two vectors.",
  "Dot product similarity evaluates vector alignment for normalized vectors.",
  "Vector databases index and query embeddings at extremely high speeds.",
  "Semantic search retrieves documents based on meaning rather than exact keywords.",
  "Keyword search relies on exact lexical matches between query and documents.",
  "Hybrid search combines lexical keyword matching with dense vector search.",
  "In-memory vector stores keep embeddings in RAM for ultra-fast local lookups.",
  "ChromaDB is an open-source embedding database designed for developer productivity.",
  "Pinecone is a cloud-native vector database offering automated indexing.",
  "Qdrant is a vector search engine equipped with extended payload filtering.",
  "Weaviate is an open-source vector database designed to scale AI workloads.",
  "Milvus is a distributed vector database capable of handling billions of vectors.",
  "Large Language Models (LLMs) are trained on massive textual datasets.",
  "Prompt engineering involves crafting inputs to guide LLM response output.",
  "Hallucinations occur when an LLM generates plausible but incorrect facts.",
  "RAG reduces LLM hallucinations by supplying grounding context from external documents.",
  "Document chunking divides long files into smaller, processable text sections.",
  "Fixed-size chunking splits text based on exact token or character counts.",
  "Recursive character chunking splits text using natural boundaries like paragraphs.",
  "Semantic chunking splits text whenever the underlying subject topic shifts.",
  "Overlapping chunks ensure continuous context is preserved across split boundaries.",
  "An embedding pipeline converts raw text chunks into high-dimensional vectors.",
  "A retriever fetches the top matching text chunks based on similarity scores.",
  "A prompt template combines retrieved context with the original user query.",
  "The LLM reads the contextual prompt and generates an accurate factual response.",
  "RAG systems eliminate the massive computational cost of retraining model weights.",
  "Knowledge bases serve as centralized repositories for enterprise document retrieval.",
  "Inverted indexes map words directly to their locations within document collections.",
  "HNSW graphs enable approximate nearest neighbor search across large vector collections.",
  "IVF indexing clusters vectors into groups to accelerate approximate search execution.",
  "Quantization reduces vector memory overhead by compressing floating-point values.",
  "Dimensionality reduction techniques compress high-dimensional vectors effectively.",
  "Hugging Face provides thousands of pre-trained machine learning models.",
  "The Xenova transformers.js library runs Hugging Face models directly inside Node.js.",
  "The all-MiniLM-L6-v2 model generates 384-dimensional dense text embeddings.",
  "ONNX Runtime executes machine learning models across diverse platform targets.",
  "Local embedding models preserve privacy by keeping sensitive text on-device.",
  "Cloud AI APIs offer high accuracy but incur latency and network costs.",
  "OpenAI text-embedding-3-small generates vectors with up to 1536 dimensions.",
  "Normalization scales vectors so their total mathematical magnitude equals one.",
  "Dot product equals cosine similarity when both input vectors are normalized.",
  "Top-K retrieval limits vector search results to the top K closest matches.",
  "Similarity thresholding filters out retrieved matches that fall below minimum scores.",
  "Data ingestion pipelines handle file reading, text extraction, and vector storage.",
  "pdf-parse extracts raw unformatted text contents from uploaded PDF documents.",
  "Multer handles multipart/form-data file uploads within Express applications.",
  "Asynchronous event loops allow Node.js to manage thousands of client connections.",
  "Non-blocking I/O ensures long-running file operations do not freeze the server.",
  "Microservices architecture splits applications into small, independently deployable services.",
  "Monolithic architecture combines all backend services into a single codebase.",
  "Serverless computing executes backend logic on demand without dedicated servers.",
  "GraphQL lets clients request only the specific data fields they need.",
  "WebSockets enable persistent two-way communication channels between client and server.",
  "Rate limiting protects backend endpoints from excessive API usage and abuse.",
  "Cross-Origin Resource Sharing (CORS) manages cross-domain browser HTTP requests.",
  "Environment variables keep sensitive configuration keys out of public repositories.",
  "TypeScript adds static typing to JavaScript to catch bugs early in development.",
  "Unit tests verify that individual functions behave correctly in isolation.",
  "Integration tests ensure multiple application modules operate together as expected.",
  "End-to-end tests simulate complete user workflows from client interface to database.",
  "Continuous Integration (CI) automates code building and testing on every commit.",
  "Git is a distributed version control system used to track code revisions.",
  "GitHub Actions automates continuous integration and deployment pipelines.",
  "Semantic versioning uses major, minor, and patch numbers to manage releases.",
  "Garbage collection reclaims unused memory automatically in JavaScript runtimes.",
  "Memory leaks occur when unused objects remain referenced in application memory.",
  "Profiling tools help developers identify bottlenecks and optimize Node.js speed.",
  "Logging frameworks like Winston record application events and server runtime errors.",
  "Fine-tuning adjusts pre-trained model weights on domain-specific training data.",
  "Context window size dictates the maximum token length an LLM can accept.",
  "Zero-shot prompting asks LLMs to complete tasks without providing prior examples."
];

async function runvector(params) {

    console.log("--- STEP 1: Processing Chunks & Generating Vectors ---");
    const embeddedChunks = await generateEmbeddingsForChunks(pdfChunks)
    
    console.log("step 2 save embeded chunks")

    const saveRes = await saveEmbedings(embeddedChunks)

    console.log("save" , saveRes)
    console.log("step 3 Simulating User Question ---")

    // const usearQuestion = "What is RAG in AI?"

    
    // console.log("usear ques" , usearQuestion)

    // const quesVector = await generateEmbedding(usearQuestion)

    // const match = await searchSimilar(quesVector , 2)

    
    // console.log("step 4")
    // console.log(match)
const testQuestions = [
    "What is RAG in AI?",
    "What dimension are vectors from all-MiniLM-L6-v2?",
    "Why do LLMs hallucinate less with RAG?",
    "What library extracts text from PDFs in Node?"
  ];

  
  console.log("--2 Executing Search Tests ---")

  for (const ques of testQuestions){
    console.log(`\nQUESTION: "${ques}"`)
    const qvector = await generateEmbedding(ques)
    const topMatch = await searchSimilar(qvector, 1)

    console.log(`Top match : ${topMatch[0].text}`)
    console.log(`score ${topMatch[0].score.toFixed(4)}`)
  }
}

// runvector()



// ai test 
import { genrateText } from "./ai/models/llm.js";

async function testValidContext() {
  const context = `
  The backend uses Express.js running on Node.js. 
  For vector search, cosine similarity and dot product are calculated manually across JavaScript arrays. 
  The embedding model used is Xenova/all-MiniLM-L6-v2 which produces 384-dimensional vectors.
  `;
  
  const question = "What is the node.js";

  // Relax strict string matching slightly so small models handle typos correctly
  const prompt = `You are a helpful QA assistant. Answer the Question based ONLY on the provided Context below. 
Account for minor typos in the question if the concept is clear. 
If the question is completely unrelated to the Context, respond: "I cannot find the answer in the provided document."

Context:
${context}

Question:
${question}

Answer:`;

  const answer = await genrateText(prompt);
  console.log("--- Updated Test Result ---");
  console.log(answer);
}

// testValidContext();


// next ai test 

import { answerQuestion } from "./services/rag.service.js";

const samplePdfChunks = [
  "The PDF-AI backend is built using Express.js and Node.js.",
  "Vector embeddings are generated using the Xenova/all-MiniLM-L6-v2 local Hugging Face model.",
  "Document chunking uses a chunk size of 100 characters with an overlap of 20 characters.",
  "Local LLM text generation is handled by Ollama running the qwen2.5:1.5b model."
];

async function ragTest() {
  console.log("1 ingecting chunk into vector ")
 const embeded = await generateEmbeddingsForChunks(samplePdfChunks)

 await saveEmbedings(embeded)
 console.log(`save ${embeded.length} vector chunks to store.\n`)

 console.log("--2 queying rag system")

 const question = "what is LLM?"

 console.log(`user ${question} \n`)

 const result = await answerQuestion(question , 2)

 console.log("3  rag output")

 console.log("AI IS ANSWEING" , result.answer)

console.log("\nRetrieved Sources:");


// result.forEach((src  , i )=>{
//   console.log(`${i + 1} , [score ${src.score}]`)
// })

}


ragTest()