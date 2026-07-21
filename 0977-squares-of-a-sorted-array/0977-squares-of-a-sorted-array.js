/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
      let arr = [];

   for(let num of nums){
    arr.push(num * num)
   };
   arr.sort((a,b)=> a-b);
   return arr;
};