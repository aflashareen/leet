/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    let count = {};
    let mid = Math.floor(nums.length / 2);
    let middle = nums[mid];

    for(let num of nums){
        count[num] = (count[num] || 0) + 1;
    }
    if(count[middle] > 1){
        return false
    }else{
        return true
    }
};