const PORT = 5000;

const app = require("./app");

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});