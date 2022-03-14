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

    let resu = arr.map(item => ({ name: item.name, age: item.age * 2 }, { name: item.name, age: item.age * 2 }, { name: item.name, age: item.age * 2 }, { name: item.name, age: item.age * 2 }))
    return resu

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
    let even = arr.map(user => user.age % 2 === 0 ? true : false);

    return even.includes(true);
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

function findMaxAge(arr) {
    return arr.reduce((max, element) => Math.max(max, element.age), -Infinity)
}


function averageOfEvenAges(arr) {
    return arr.filter(num => num.age % 2 === 0).reduce((total, current) => total + current.age, 0) / 2;
}

function averageOfOddAges(arr) {
    return arr.filter(num => num.age % 2 !== 0).reduce((total, current) => total + current.age, 0) / 2;
}