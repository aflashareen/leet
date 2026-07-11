/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
    let result = 0;

    for(let num of nums){
        if(num % 2 === 0){
            result |= num
        }
    }
    return result
};