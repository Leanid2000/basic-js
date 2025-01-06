const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nom = new Array(n.toString().length).fill(0)
  let arr = nom.map((elem, num, mass)=> {
    let a = n.toString().split('');
    a.splice(num, 1);
    return Number(a.join(''))
  });
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
