import healthRoute from "./routes/healty.routes.js";
import express from "express";
import uploadRoute from "./routes/pdf.routes.js";
import searchRoute from "./routes/search.routes.js";
import chatRoute from "./routes/chat.routes.js";

const app = express();

app.use(express.json());

app.use("/", healthRoute);

app.use("/api", uploadRoute);

app.use("/api/search", searchRoute);

app.use("/api/chat", chatRoute);

export default app;