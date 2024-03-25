const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.use("/random", (req, res) => {
    const max = 100;
    const min = 1;
    const number = Math.floor((Math.random() * max) + min);
    res.status(200).json({
        success: true,
        "random": number
    });
});