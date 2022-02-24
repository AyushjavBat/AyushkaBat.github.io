"use strict";
const assert = require("assert");

const functionsModule = require("./convertFahrenheit");
const convertFahrenheit = functionsModule.convertFahrenheit;

describe("test of convert Fahrenheit", function() {
    it("test of convert Fahrenheit", function() {
        assert.Equal(convertFahrenheit(32));
    });

    it("test of convert Fahrenheit", function() {
        assert.Equal(convertFahrenheit(0));
    });
    it("test of convert Fahrenheit", function() {
        assert.Equal(convertFahrenheit(212));
    });
    it("test of convert Fahrenheit", function() {
        assert.Equal(convertFahrenheit(100));
    });

});