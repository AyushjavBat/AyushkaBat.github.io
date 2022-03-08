"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests



function topSalary(object) {
    if (object == null || object == {}) {
        return null;
    } else {
        let max = [];
        for (const [key, value] of Object.entries(object)) {
            if (max < [key, value]) {
                max = [key];
            }

        }
        return max;
    }
}