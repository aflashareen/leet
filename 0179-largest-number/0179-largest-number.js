/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b)=>{
        let a1 = a.toString() + b.toString();
        let a2 = b.toString() + a.toString();

        return a2 - a1
    });
    if(nums[0] === 0){
        return "0";
    }
    return nums.join("");
};