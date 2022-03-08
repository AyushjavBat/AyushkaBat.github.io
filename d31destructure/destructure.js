"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests



function topSalary(object) {
    let max = 0;
    let maxName = null;
    for (const [key, value] of Object.entries(object)) {
        if (max < value) {
            max = value;
            maxName = key;
        }

    }
    return maxName;
}