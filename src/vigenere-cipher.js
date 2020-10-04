const CustomError = require("../extensions/custom-error");

const ALPHABET_LENGTH = 26;
const ALPHABET_START = 65;
const ALPHABET_END = 90;

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    let j = 0,
        result = '';
    const messageText = message.toUpperCase();
    const keyText = key.toUpperCase();
    for(let i = 0; i < messageText.length; i++) {
      if(j === keyText.length) j= 0;
      const charCode = messageText.charCodeAt(i);
      if(charCode >= ALPHABET_START && charCode <= ALPHABET_END) {
        const resultCharCode = ((charCode + keyText.charCodeAt(j)) % ALPHABET_LENGTH) + ALPHABET_START;
        result += String.fromCharCode(resultCharCode);
        j++;
      }
      else {
        result += messageText[i];
      }
    }
    return (this.isDirect ? result : result.split('').reverse().join(''));
  }

  decrypt(message, key) {
    let j = 0,
        result = '';
    const messageText = message.toUpperCase();
    const keyText = key.toUpperCase();
    for(let i = 0; i < messageText.length; i++) {
      if(j === keyText.length) j= 0;
      const charCode = messageText.charCodeAt(i);
      if(charCode >= ALPHABET_START && charCode <= ALPHABET_END) {
        let resultCharCode = ((charCode - keyText.charCodeAt(j)) % ALPHABET_LENGTH);
        resultCharCode += (resultCharCode >= 0) ? ALPHABET_START : ALPHABET_END + 1;
        result += String.fromCharCode(resultCharCode);
        j++;
      }
      else {
        result += messageText[i];
      }
    }
    return (this.isDirect ? result : result.split('').reverse().join(''));
  }
}

module.exports = VigenereCipheringMachine;
