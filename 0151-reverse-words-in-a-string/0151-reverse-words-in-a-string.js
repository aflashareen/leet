/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reverse = s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ")
    return reverse
};