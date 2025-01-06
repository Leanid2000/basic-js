const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let a  = str.split('').map((elem, n, mass) => mass[n]===mass[n+1]? elem=1:elem)
  let summ = 1
  return a.map(elem => {
    if(typeof elem === 'number'){
        summ += 1
        return summ
    }else{
       summ=1
        return elem
    }
    }).filter((elem, n, mass)=> typeof mass[n]=== 'number' && typeof mass[n+1]=== 'number' ? false : true).join('') 
}

module.exports = {
  encodeLine
};
