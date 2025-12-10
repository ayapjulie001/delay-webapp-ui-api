const express = require('express');
const app = express();
const path = require('path');

// Serve static HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Delayed response endpoint
app.get('/delayed-response', (req, res) => {
    const delay = parseInt(req.query.delay, 10);
    const actualDelay = isNaN(delay) ? 15000 : delay;

    console.log(`Delaying response by ${actualDelay} ms`);
    setTimeout(() => {
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Delayed Response</title>
            </head>
            <body>
                <h1>Response Received</h1>
                <p>This response was delayed by ${actualDelay} milliseconds.</p>
            </body>
            </html>
        `);
    }, actualDelay);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
