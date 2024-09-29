const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("resp from server")
})

app.get("/api/random", (req, res) => {
    res.send({
        data: Math.random(10000)
    }
    );
})

app.listen(3000, () => {
    console.log("Server up with random endpoint")
});