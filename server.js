const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use Heroku's dynamic port or fallback to 3000

// Middleware to detect User-Agent and respond accordingly
app.get('/', (req, res) => {
    const userAgent = req.get('User-Agent');

    if (userAgent && userAgent.includes('Roblox')) {
        // If the request is from Roblox, serve the Lua code
        res.type('text/plain');
        res.send(`if game:GetService("RunService"):IsStudio() then getfenv().print = nil end`); // Replace with your Lua code
    } else {
        // If the request is from a browser or any other client, serve a video or GIF
        res.redirect('https://media.tenor.com/omKOKKlszw4AAAAd/roblox-girl-turning-roblox.gif'); // Replace with your video/GIF URL
    }
});

// Serve static files from the "public" directory (if needed)
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
