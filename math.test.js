/* JEST tests for the 3 math calculation functions */

const { mean, median, mode } = require('./mathFunctions');

// Group the tests
describe("mathFunctions_testing", function () {
    let numArray = [];

    // Set up an array
    beforeAll(function(){
        console.log("Set up numArray before all tests");
        numArray = [3,6,6,9,10,25,140]
      })

    // Test MEAN
    test('return mean', function () { 
            let res = mean(199, numArray); 
            expect(res).toBeCloseTo(28.43); 
            }); 

    // Test MEDIAN
    test('return median', function () { 
        let res = median(numArray); 
        expect(res).toEqual(9); 
        }); 

    // Test MODE
    test('return mode', function () { 
        let res = mode(numArray); 
        expect(res).toEqual([6]); 
        }); 

    });  // END describe