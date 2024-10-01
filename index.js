const express = require('express');

const app = express();

// Routes

app.get('/', function(req, res) {
    // home page
    return res.send(`
        <h1>Welcome to the Home Page</h1>
        <ul>
            <li><a href="/mean">MEAN (average)</a></li>
            <li><a href="/median">MEDIAN (middle)</a></li>
            <li><a href="/mode">MODE (most frequent</a></li>
        </ul>
    ` ) 
})  // END root route


app.get('/mean', function(req, res) {
    // mean page
    return res.send('mean page :<');
} )  // END mean route


app.get('/median', function(req, res) {
    // median page
    return res.send('median page :|');
} )  // END median route


app.get('/mode', function(req, res) {
    // mode page
    return res.send('mode page :)');
} )  // END mode route

/* ************************************* */
// Start a server
app.listen(8080, function() {
    console.log("Server is running, and listening on port 8080");
})