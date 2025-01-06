const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    addLink(value=' ') {
        this.link.push(`( ${value} )`)  
        return this
    },
    removeLink(position) {
        if(typeof position!=='number'||this.link.length<position||position<=0||Math.floor(position)!==Math.ceil(position)){
            this.link=[]
            throw new Error("You can\'t remove incorrect link!")
        }
        this.link.splice(position-1, 1)
        
        return this
      },
      reverseChain() {
        this.link.reverse()
        return this
      },
      getLength() {
        let a =this.link.length
        this.link=[]
        return a
      },
      finishChain() {
        let a= this.link.splice(0, this.link.length).join('~~')
        this.link=[]
        return a
      },
    link:[]  
};

module.exports = {
  chainMaker
};
