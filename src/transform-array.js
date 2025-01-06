const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    let mass= arr
    if(!Array.isArray(mass)){
        throw new Error("'arr' parameter must be an instance of the Array!")
    }
    try{
         return mass
        .map((item, index, array) => {
            if (item === "--double-next" && index !== array.length-1) {
              item = array[index + 1];
            } else if (item === "--double-prev"  && index !== 0) {
              item = array[index - 1];
            } else if (item === "--discard-next" && index !== array.length-1) {
              item = [];
              array[index + 1] = [];
            } else if (array[index + 1] === "--discard-prev" && index !== 0) {
              item = [];
              array[index + 1] = [];
            } else if (item ==="--discard-prev" && index === 0){
                item = [];
            }else if (item ==="--double-prev" && index === 0){
                item = [];
            }else if (item ==="--double-next" && index === array.length-1){
                item = [];
            }else if (item ==="--discard-next" && index === array.length-1){
                item = [];
            }

            return item;
          })
          .flat();
    }catch(error){
        console.error(error)
    }
       
}


module.exports = {
  transform
};
