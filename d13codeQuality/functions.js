"use strict";
module.exports = {
    isVowel
};
/**
 *
 * @param {int} letter - vowel
 * @returns {function} that has test of whether a vowel or not
 */
function isVowel(letter) {
    let vowels = "aeuio";
    if (vowels.includes(letter)) {
        return true;
    } else return false;
}