const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const SERVER_NAME = process.env.SERVER_NAME || "LOCAL-SERVER";

app.get("/", (req, res) => {
    res.send(`
        <h1>Load Balanced Cloud Application</h1>
        <h2>Response from: ${SERVER_NAME}</h2>
        <p>Port: ${PORT}</p>
        <p>This request was handled by one of the backend servers.</p>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});

app.get("/api", (req, res) => {
    res.json({
        message: "Request successfully handled",
        server: SERVER_NAME,
        port: PORT
    });
});

app.listen(PORT, () => {
    console.log(`${SERVER_NAME} is running on port ${PORT}`);
});
