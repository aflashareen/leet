/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const sum = (n * (n + 1))/2;

    let res = 0;
    for(let num of nums){
        res += num
    }
    return sum - res;
};