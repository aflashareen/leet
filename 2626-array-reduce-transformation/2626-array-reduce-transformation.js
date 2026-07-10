/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
   let accum = init;
    for(let curr of nums){
        accum = fn(accum,curr)
    }
    return accum

 function sum(accum, curr) {
     return accum + curr; 
 }
 let res = reduce([1,2,3,4],sum,0)
};
