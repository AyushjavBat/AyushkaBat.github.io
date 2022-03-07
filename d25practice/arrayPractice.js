"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/**
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge }; //add all of your function names here that you need for the node mocha tests
*/

function beforEach() {
    this.numArray = numArray;
    this.peopleArray = peopleArray;

}

function doubleNums(arr) {
    return arr.map(num => num * 2);
}

function doubleAges(arr) {

    return arr.map(num => num.age * 2)
}



function filterEven(arr) {
    return arr.filter(num => num % 2 === 0)
}

function filterOver10(arr) {
    return arr.filter(num => num.age > 10)
}

function findEvenNum(arr) {
    return arr.find(num => num % 2 === 0)
}

function findEvenAge(arr) {
    return arr.find(num => num.age % 2 === 0)

}

function findOddAge(arr) {
    return arr.find(num => num.age % 2 !== 0)

}


function includesEvenNum(arr) {
    return arr.includes(num => num % 2 === 0);
}

function includesEvenAge(arr) {
    return arr.includes(num => num.age % 2 === 0)

}

function sumOfNumbers(arr) {
    return arr.reduce((sum, num) => sum + num, 0)
}

function averageOfNumbers(arr) {
    return arr.reduce((sum, current) => sum + current) / arr.length;
}

function maxOfNumbers(arr) {
    return arr.reduce((max, current) => Math.max(max, current), -100)
}

function maxOfAges(arr) {
    return arr.reduce((max, age) => Math.max(max, age), -100)
}

function averageOfEvenAges(arr) {
    return arr.filter(num => num.age % 2 === 0).reduce((total, current) => total + current.age, 0) / 2;
}

function averageOfOddAges(arr) {
    return arr.filter(num => num.age % 2 !== 0).reduce((total, current) => total + current.age, 0) / 2;
}