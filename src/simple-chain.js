const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: '',
  getLength() {
    const len = this.str.split('~~');
    return (len[0] ? len.length : 0);
  },
  addLink(value = '') {
    const link = `( ${value} )`;
    if(this.getLength()) {
      this.str = `${this.str}~~${link}`;
    }
    else {
      this.str = `${link}`;
    }
    return this;
  },
  removeLink(position) {
    const pos = position - 1;
    if(pos < 0 || pos > this.getLength())  {
      this.finishChain();
      throw Error('Invalid position!');
    }
    this.str = this.str.split('~~').filter((link, index) => index !== pos).join('~~');
    return this;
  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    const res = this.str;
    this.str = '';
    return res;
  }
};

module.exports = chainMaker;
