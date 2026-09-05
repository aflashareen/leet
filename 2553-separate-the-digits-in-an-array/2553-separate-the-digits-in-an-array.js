/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let res = [];
    for(let num of nums){
    let change = String(num).split("").map(Number);
    res.push(...change)
    }
    return res;
};