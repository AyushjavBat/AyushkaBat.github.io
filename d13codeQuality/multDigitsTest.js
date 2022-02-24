"use strict";
const assert = require("assert");

const functionsModule = require("./multDigits");
const multDigits = functionsModule.multDigits;

describe("test of multiply digits", function() {
    it("test of multiply digits", function() {
        assert.strictEqual(multDigits(1234));
    });

    it("test of multiply digits", function() {
        assert.strictEqual(multDigits(102));
    });
    it("test of multiply digits", function() {
        assert.strictEqual(multDigits(8));
    });

});