"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/**module.exports = { ucFirst, getMaxSubSum, truncate, camelize, checkSpam, extractCurrencyValue }; / / add all of your
function names here that you need
for the node mocha tests

*/

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxxxx');
}


function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

function extractCurrencyValue(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "$") {
            newStr += str[i];
        }
    }
    return Number(newStr);
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
}

function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr) {
        return chr.toUpperCase();
    });
}