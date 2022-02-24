"use strict";
const assert = require("assert");

const functionsModule = require("./calcDownpayment");
const calcDownpayment = functionsModule.calcDownpayment;

describe("test of calculate a downpayment", function() {
    it("calculate of downpayment", function() {
        assert.strictEqual(calcDownpayment(40000));
    });

    it("calculate of downpayment", function() {
        assert.strictEqual(calcDownpayment(50000));
    });
    it("calculate of downpayment", function() {
        assert.strictEqual(calcDownpayment(100000));
    });
    it("calculate of downpayment", function() {
        assert.strictEqual(calcDownpayment(250000));
    });
});