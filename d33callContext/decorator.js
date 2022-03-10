"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
//module.exports = { spy }; //add all of your function names here that you need for the node mocha testsfunction spy(func) {

function spy(func) {

    function wrapper(...args) {
        // using ...args instead of arguments to store "real" array in wrapper.calls
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}