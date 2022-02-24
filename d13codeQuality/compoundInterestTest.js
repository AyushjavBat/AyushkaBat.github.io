"use strict";
const assert = require("assert");

const functionsModule = require("./compoundInterest");
const compoundInterest = functionsModule.compoundInterest;

describe("test of compoundInterest", function() {
    it("tests compounded interest rate balance", function() {
        assert.strictEqual(compoundInterest(100, 10, 1));
    });

    it("tests compounded interest rate balance", function() {
        assert.strictEqual(compoundInterest(10000, 5, 10));
    });
});