/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if(n % 2 == 0){
        return n
    }
    let small = n * 2
    return small
};