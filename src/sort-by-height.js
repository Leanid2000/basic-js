const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let a  = arr.filter(elem=>elem!==-1).sort((a, b)=>a-b);
  arr.map((elem,n) => elem===-1?a.splice(n,0, -1):elem);
  return a;
}

module.exports = {
  sortByHeight
};
