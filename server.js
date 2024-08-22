const express = require('express');
const app = express();
const port = 3000; // You can change this to any port number you prefer

// Middleware to detect User-Agent
app.get('/script', (req, res) => {
    const userAgent = req.get('User-Agent');

    if (userAgent.includes('Roblox')) {
        // If the request is from Roblox, serve the Lua code
        res.type('text/plain');
        res.send(`print("Hello from a hidden script!")`); // Replace with your Lua code
    } else {
        // If the request is from a browser, serve a video or GIF
        res.redirect('https://example.com/your-video-or-gif-url'); // Replace with your video/GIF URL
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
