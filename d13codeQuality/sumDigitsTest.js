"use strict";
const assert = require("assert");

const functionsModule = require("./sumDigits");
const sumDigits = functionsModule.sumDigits;

describe("test of sum digits", function() {
    it("test of sum digits", function() {
        assert.strictEqual(sumDigits(1234));
    });

    it("test of sum digits", function() {
        assert.strictEqual(sumDigits(102));
    });
    it("test of sum digits", function() {
        assert.strictEqual(sumDigits(8));
    });

});