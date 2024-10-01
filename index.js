const express = require('express');

const app = express();

// Routes

app.get('/', function(req, res) {
    return res.send("1st Route is working - Root") 
})


// Start a server
app.listen(8080, function() {
    console.log("Server is running, and listening on port 8080");
})