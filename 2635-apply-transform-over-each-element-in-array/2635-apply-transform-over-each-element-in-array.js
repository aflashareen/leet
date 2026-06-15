/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr=[];
   for(let i =0;i<arr.length;i++){
       let n = fn(arr[i],i)
         newArr.push(n)
    }
    return newArr
};
