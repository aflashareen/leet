/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let frst = s.split('').sort().join();
    let scnd = t.split('').sort().join();

    return frst === scnd
};