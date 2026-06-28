/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let letter = s.toLowerCase();
    let str = letter.replace(/[^a-zA-Z0-9]/g, "");

    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--

    }
    return true;
};