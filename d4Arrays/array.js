"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 
module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let total = 0;
    for (const number of arr) {
        total += number;
    }
    return total;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let total = 1;
    for (const number of arr) {
        total *= number;
    }
    return total;
}
/**
 * 
 * @param {Array} arr of strings
 * @returns {number} max of arr strings
 */

function findLongestWord(arr) {
    let long_str = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        let max = arr[i].length;
        if (max > long_str) {
            long_str = max;
        }
    }
    return long_str;
}
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} reverse to arr numbers
 */
function reverseArray(array) {
    let reverse_Array = [];
    let i;
    while (i = array.pop())
        reverse_Array.push(i);

    return reverse_Array;
}

function reverseArrayInPlace(arrayValue) {
    for (let i = 0; i < Math.floor(arrayValue.length / 2); i++) {
        let temp = arrayValue[i];
        arrayValue[i] = arrayValue[arrayValue.length - 1 - i];
        arrayValue[arrayValue.length - 1 - i] = temp;
    }
    return arrayValue;
}
/**
 * 
 * @param {Array} arr of nested
 * @returns {number} max word.lenght of words
 */
function scoreExams(studentAnswers, correctAnswers) {
    let studentScores = [];
    for (let x = 0; x < studentAnswers.length; x++) {
        let scoreCounter = 0;
        for (let i = 0; i < studentAnswers[x].length; i++) {
            if (studentAnswers[x][i] === correctAnswers[i]) {
                scoreCounter++;
            }
        }
        studentScores[x] = scoreCounter;
    }
    return studentScores;
}
/**
 * 
 * @param {Array} arr of nested
 * @returns {number} create 2 array
 */
function generateArray(num1, num2) {
    let val = 1;
    let numArray = [];

    for (let i = 0; i < num1; i++) {
        numArray[i] = new Array(num2);

        for (let j = 0; j < num2; j++) {
            numArray[i][j] = val;
            val++;
        }
    }
    return numArray;
}