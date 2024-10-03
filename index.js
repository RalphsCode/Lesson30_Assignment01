const express = require('express');
const MathError = require('./mathError');
const { mean, median, mode } = require('./mathFunctions');
const app = express();

/* // Routes  /////////////////////////// */

app.get('/:calc', function(req, res, next) {
    // Page to show all the 
    try {
        const nums = req.query.nums;
        if (!nums){
             res.send("<h2>Please add numbers to the URL string to use in the math calculations.</h2>");
            throw new MathError("No numbers present in the URL Query.", 400)
        }
        // If 'nums' exists, split it into an array
        const numArray = nums.split(',').map(Number);
        let sum = 0;
        let i = 0;
        while (i < numArray.length) {
            if (isNaN(numArray[i]) ){
                console.log('NaN found')
                throw new MathError(`${numArray[i]} is not a number`, 400) }
        
            sum = sum + parseInt(numArray[i]);
            i++; }  // END while loop
        
            
        const calc = req.params.calc;
        let result = 0;

        if (calc === 'mean') {
            result = mean(sum, numArray);
            
        } else if (calc === 'median') {
            result = median(numArray);
            
        } else if (calc === 'mode') {
            result = mode(numArray);
        } else if (calc === 'all') {
            const res1 = mean(sum, numArray);
            const res2 = median(numArray);
            const res3 = mode(numArray);
            result = {"mean": res1, "median": res2, "mode": res3}
        }
        const out = {"operation": calc, "value":result}
            return res.json(out);

    } catch (err) {   // err will be MathError object
        return next(err)
    }
} )  // END route


app.get('/median', function(req, res) {
    // median page
    return res.send('median page :|');
} )  // END median route


app.get('/mode', function(req, res) {
    // mode page
    return res.send('mode page :)');
} )  // END mode route


/* <>><><><><><><><><><><><><><><><><><><*/

// Express Error Handling
app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;
    console.log('Error Message:', message);
  
    // set the status and alert the user
      return res.status(status).json({
      error: {message, status}
    });
  });
  
  

/* ************************************* */
// Start a server
app.listen(8080, function() {
    console.log("Server is running, and listening on port 8080");
})