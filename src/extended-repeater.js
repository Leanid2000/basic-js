const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    options.separator===undefined?options.separator='+':options.separator;
    options.additionSeparator===undefined?options.additionSeparator='|':options.additionSeparator;
    options.addition===undefined?options.addition='':options.addition;
    let a;
    let b;
    if(options.additionRepeatTimes===undefined){
        a=options.addition
    }else{
        a = (options.addition+options.additionSeparator).repeat(options.additionRepeatTimes-1)+options.addition;
    }
    if(options.repeatTimes===undefined){
        b=str+a
    }else{
        b = (str+a+options.separator).repeat(options.repeatTimes-1)+str+a
    }
   return b
}

module.exports = {
  repeater
};
