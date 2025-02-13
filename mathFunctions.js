// MEAN Calculation
function mean(sum, numArray){ 
    console.log('In the mean function in mathFunctions.js');
    const mean = sum / numArray.length; 
    return (Number(mean.toFixed(2)));
    }  // END mean()
    


// MEDIAN Calculation
function median(numArray){
    // Step 1: Sort the array in ascending order
    numArray.sort((a, b) => a - b);
    
    const middle = Math.floor(numArray.length / 2); // Find the middle index

    // Step 2: Check if array length is even or odd
    if (numArray.length % 2 === 1) {
        // Odd length, return the middle element
        return numArray[middle];
    } else {
        // Even length, return the average of the two middle elements
        return (numArray[middle - 1] + numArray[middle]) / 2;
    }
}  // END median()



// MODE Calculation
function mode(numArray) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];

    // Count the frequency of each element
    numArray.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        // Track the highest frequency
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num]; 
        }
    });

    // Identify the mode(s)
    for (const num in frequencyMap) {
        if (frequencyMap[num] === maxFrequency) {
            modes.push(Number(num)); // Collect the number(s) with the highest frequency
        }
    }

    // Return the modes as an array cuz it may contain one or more modes
    return modes;
} // END mode()



// Export the functions
module.exports = { mean, median, mode };