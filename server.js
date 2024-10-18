// Import required modules
const express = require('express');
const path = require('path');


// Create an instance of the express app
const app = express();

const cors = require('cors');
app.use(cors());


// Serve static files from the dist directory
const distDir = path.join(__dirname); // replace <your-angular-project-name> with your actual project name
app.use(express.static(distDir));

// Redirect all other requests to the index.html
app.get('/*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
});

// Define a port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
