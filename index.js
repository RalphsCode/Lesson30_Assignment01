const express = require('express');
const MathError = require('./mathError');
const { mean, median, mode } = require('./mathFunctions');
const app = express();

/* // Route  /////////////////////////// */
/* Use URL query to pass it what calculation to use */

app.get('/:calc', function(req, res, next) {
    // Page to show the results
    try {
        // Get the passed in variables
        const nums = req.query.nums;

        // If no variables were passed in, error
        if (!nums){
             res.send("<h2>Please add numbers to the URL string to use in the math calculations.</h2>");
            throw new MathError("No numbers present in the URL Query.", 400)
        }

        // If 'nums' exists, split it into an array of numbers
        const numArray = nums.split(',').map(Number);
        let sum = 0;
        let i = 0;

        // Loop through the array
        while (i < numArray.length) {
            // Check for a variable that is not a number and error
            if (isNaN(numArray[i]) ){
                console.log('NaN found');
                res.send(`<h2>The character at position ${i+1} is not a number.</h2>`);
                throw new MathError('NaN found in passed in paramaters.', 400) }  // END if...

            // sum the values in the array
            sum = sum + numArray[i];
            i++; }  // END while loop
        
        // Get the route to use from the URL paramater   
        const calc = req.params.calc;
        let result = 0;  // used to hold the result of the calculation

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
        // Create an object containing the formatted results
        const out = {"operation": calc, "value":result}
            return res.json(out);

    } catch (err) {   // err will be MathError object
        return next(err)
    }
} )  // END route


/* <>><><><><><><><><><><><><><><><><><><*/

// Express Error Handling
app.use(function(err, req, res, next) {
    // Get the error status and error message from the mathError object
    let status = err.status || 500;  // default to 500
    let message = err.msg;
  
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