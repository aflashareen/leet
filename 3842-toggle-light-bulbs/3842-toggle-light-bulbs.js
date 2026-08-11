/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function(bulbs) {
    let frequency = {}
    let result = []
    for(let num of bulbs){
        frequency[num] = (frequency[num] || 0) + 1
    }
    for(let num in frequency){
        if(frequency[num] % 2 !==0){
            // console.log(num)
            result.push(Number(num))

        }
    }
    return result.sort((a,b)=> a - b)
};