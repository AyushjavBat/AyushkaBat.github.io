"use strict";
const assert = require("assert");

const functionsModule = require("./calcDistance");
const calcDistance = functionsModule.calcDistance;
describe("test of calculate a distance", function() {
    it("test of calculate a distance", function() {
        assert.strictEqual(calcDistance(0, 0, 5, 5));
    });
});