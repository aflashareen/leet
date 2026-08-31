/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let row = 0;
    let col = 0;
    for(let command of commands){
        if(command === "UP"){
            row--
        }else if(command === "DOWN"){
            row++
        }else if(command === "LEFT"){
            col--
        }else if(command === "RIGHT"){
            col++
        }
    }
    return row * n + col
};