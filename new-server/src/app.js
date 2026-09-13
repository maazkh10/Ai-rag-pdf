// const express = require("express");

import healthRoute from "./routes/healty.routes.js"
import express from "express";
import uploadRoute from "./routes/pdf.routes.js"
import searchRoute from "./routes/search.routes.js"
const app = express();

app.use(express.json())

app.use('/' , healthRoute)
app.use('/api' , uploadRoute)

app.use('/api/search' , searchRoute)

export default app;