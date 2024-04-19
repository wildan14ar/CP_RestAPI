const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// Load data from JSON file
function loadData() {
    const data = fs.readFileSync('data.json');
    return JSON.parse(data);
}

app.get('/products', (req, res) => {
    const data = loadData();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
