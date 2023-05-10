import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

import friendsRouter from "./routes/friends.router.js";
import messagesRouter from "./routes/messages.router.js";

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/friends", friendsRouter);

app.use("/messages", messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
