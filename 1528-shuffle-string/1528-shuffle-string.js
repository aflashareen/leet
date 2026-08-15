/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
        let res = [];
    for(let char in s){
        // console.log(char)
        res[indices[char]]=s[char]
        // console.log(res)
    }
    return res.join("");
};