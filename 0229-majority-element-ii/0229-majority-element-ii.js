/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let count=[];
    let arr = [];
    for(let num of nums){
        count[num] = (count[num] || 0) + 1;
        if(count[num] > nums.length / 3 && !arr.includes(num)){
            arr.push(num);
        }
    }
    return arr
};