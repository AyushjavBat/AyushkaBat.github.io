"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
//module.exports = {printNumbers, printNumber}; //add all of your function names here that you need for the node mocha tests
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

function printNumber(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}