"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
 
module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests
*/


function beforEach() {
    this.arr = testArray;
}
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myMap(arr, func) {
    //IMPLEMENTATION NEEDED
    return arr.map(func);
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myFilter(arr, func) {

    return arr.filter(func)
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
function myReduce(arr, func, initialValue) {

    return arr.reduce(func, initialValue);
}