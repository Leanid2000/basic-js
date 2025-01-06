const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a  = s1.split('')
  let b  = s2.split('')
  return a.reduce((summ, elem)=>{
    if(b.indexOf(elem)!== -1){
        
        b.splice(b.indexOf(elem),1)
        return summ+=1
    }
    return summ
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};
