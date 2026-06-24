/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let count=0;
    for(let i = 0; i < sentences.length ; i++){
        let sentence = sentences[i].split(" ").length
        if(sentence > count){
          count = sentence
        }
    }
        // console.log(count)
        return count
};
console.log (mostWordsFound( ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))