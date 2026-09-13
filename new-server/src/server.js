// const app  = require"./app";
import app from "./app.js";

const PORT = process.envPORT || 8000;

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})
