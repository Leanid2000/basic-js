const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr = matrix
  let elem1= matrix[0].length
  let elem2= matrix.length
  let summ = 0
  for (let i = 0; i<elem1; i++){
    for(let ii = 0; ii<elem2; ii++){
        if(arr[ii][i]===0 && ii<elem2-1){
            arr[ii+1][i]=0;
        }
        summ+=arr[ii][i]
    }
  }
  return summ
}

module.exports = {
  getMatrixElementsSum
};
