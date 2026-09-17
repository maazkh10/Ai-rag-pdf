import healthRoute from "./routes/healty.routes.js";
import cors from "cors"
import express from "express";
import uploadRoute from "./routes/pdf.routes.js";
import searchRoute from "./routes/search.routes.js";
import chatRoute from "./routes/chat.routes.js";
import path from "path"
const app = express();

app.use(cors({
    origin : "http://localhost:5174"
}))
app.use(express.json());

app.use("/", healthRoute);

app.use("/uploads" , express.static(path.join(process.cwd() , "upload")))

app.use("/api", uploadRoute);

app.use("/api/search", searchRoute);

app.use("/api/chat", chatRoute);

export default app;