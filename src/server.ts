import express from "express";
import "express-async-errors";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("up and running! Modified");
});

app.listen(port, () => {
    console.log(`Server runs at https://localhost:${port}`);
});
