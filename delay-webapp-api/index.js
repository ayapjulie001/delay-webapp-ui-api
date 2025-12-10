const express = require('express');
const app = express();
const port = 3006;

app.use(express.json()); // for parsing JSON bodies

// Helper function to delay response
const delayResponse = async (seconds) => {
    if (isNaN(seconds) || seconds < 0) {
        seconds = 5;
    }
    console.log(seconds);
    await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    return seconds;
};

// GET
app.get('/delay', async (req, res) => {
    const seconds = await delayResponse(parseInt(req.query.seconds));
    res.json({
        method: "GET",
        status: "success",
        delay: seconds,
        message: `GET response delayed by ${seconds} seconds`
    });
});

// POST
app.post('/delay', async (req, res) => {
    const seconds = await delayResponse(parseInt(req.body.seconds));
    res.json({
        method: "POST",
        status: "success",
        delay: seconds,
        message: `POST response delayed by ${seconds} seconds`
    });
});

// PUT
app.put('/delay', async (req, res) => {
    const seconds = await delayResponse(parseInt(req.body.seconds));
    res.json({
        method: "PUT",
        status: "success",
        delay: seconds,
        message: `PUT response delayed by ${seconds} seconds`
    });
});

// PATCH
app.patch('/delay', async (req, res) => {
    const seconds = await delayResponse(parseInt(req.body.seconds));
    res.json({
        method: "PATCH",
        status: "success",
        delay: seconds,
        message: `PATCH response delayed by ${seconds} seconds`
    });
});

// DELETE
app.delete('/delay', async (req, res) => {
    const seconds = await delayResponse(parseInt(req.body.seconds));
    res.json({
        method: "DELETE",
        status: "success",
        delay: seconds,
        message: `DELETE response delayed by ${seconds} seconds`
    });
});

app.listen(port, () => {
    console.log(`Delay API running at http://localhost:${port}`);
});