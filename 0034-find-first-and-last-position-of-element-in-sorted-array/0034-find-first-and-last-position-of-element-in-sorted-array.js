/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let a = nums.indexOf(target);
    let b = nums.lastIndexOf(target);
    
    if(target === 0){
        return [nums.indexOf(target), nums.lastIndexOf(target)]
    }

    if(!target){
        return [-1,-1]
    }else{
        return [a,b]
    }
};