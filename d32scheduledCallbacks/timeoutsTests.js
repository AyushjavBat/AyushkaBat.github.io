"use strict";
/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page. 
const assert = require("assert");  //always need this with node
const myExports = require("./timeouts.js");  //with node need the name of your file with your functions here
const printNumbers = myExports.printNumbers;  //do this for all of the functions used in the Mocha tests
const printNumber = myExports.printNumber;
*/


/*
a)	make the numbers print out after the “from” seconds,
    5 will print after 5 seconds,
    then 6 in one more second
b)  will setTimeOut

*/


describe("time out operator tests", function() {
    it("tests print number output every second", function() {
        assert.strictEqual(printNumbers(5, 10));
    });

    it("tests setTimeout ", function() {
        assert.strictEqual(printNumber(15, 20));
    });

});