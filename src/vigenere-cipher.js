const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(elem=true){
        this.form=elem
    }
  encrypt(message, key) {
    if(message===undefined||key===undefined){
        throw new Error('Incorrect arguments!')
    }
    let mess = message
       let a = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
       let k =key.toUpperCase()
       let ss = 0;
   let full = mess.split('').map((elem, n, mass)=>{
    if(ss>key.length-1){
        ss =0
    }
       if(a.includes(elem.toUpperCase())){
        let num = a.indexOf(k[ss])
        let num2 = a.indexOf(elem.toUpperCase())
        let summ=0;
        (num2+num)>=26?summ=num2+num-26:summ=num2+num;
        let log = a[summ]
        ss+=1
        return log
       }
       return elem.toUpperCase()
    })
    return this.form===false? full.reverse().join(''):full.join('');
  }
  decrypt(encryptedMessage, key) {
    if(encryptedMessage===undefined||key===undefined){
        throw new Error('Incorrect arguments!')
    }
    let mess = encryptedMessage
    let a = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let k =key.toUpperCase()
    let ss = 0;
    let full = mess.split('').map((elem, n, mass)=>{
    if(ss>key.length-1){
        ss =0
    }
       if(a.includes(elem)){
        let num = a.indexOf(k[ss])
        let num2 = a.indexOf(elem)
        let summ=0;
        (num2-num)<0?summ=num2-num+26:summ=num2-num;
        let log = a[summ]
        ss+=1
        return log
       }
       return elem
    })
    return this.form===false? full.reverse().join(''):full.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
