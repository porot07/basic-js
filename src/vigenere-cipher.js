const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error;
    message = message.toUpperCase();
    key = key.toUpperCase();
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').map((el) => el.toUpperCase());
    const msgLen = message.length;
    const keyLen = key.length;
    const alpbetLen = alphabet.length;
    let keyInd = 0;
    let codeMsg = '';

    for (let cnt = 0; cnt < msgLen; cnt += 1) {
      const indMsg = alphabet.indexOf(message[cnt]);
      if (indMsg >= 0) {
        const indKey = alphabet.indexOf(key[keyInd]);
        const index = (indMsg + indKey) % alpbetLen;
        codeMsg += alphabet[index];

        if (keyInd + 1 === keyLen) {
          keyInd = 0;
        } else {
          keyInd += 1;
        }
      } else {
        codeMsg += message[cnt];
      }
    }

    return this.bool ? codeMsg : codeMsg.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw Error;
    message = message.toUpperCase();
    key = key.toUpperCase();

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').map(el => el.toUpperCase());
    const msgLen = message.length;
    const keyLen = key.length;
    const alpbetLen = alphabet.length;
    let keyInd = 0;
    let codeMsg = '';


    for (let cnt = 0; cnt < msgLen; cnt += 1) {
      const indMsg = alphabet.indexOf(message[cnt]);
      if (indMsg >= 0) {
        const indKey = alphabet.indexOf(key[keyInd]);
        const index = (indMsg + alpbetLen - indKey) % alpbetLen;
        codeMsg += alphabet[index];

        if (keyInd + 1 === keyLen) {
          keyInd = 0;
        } else {
          keyInd += 1;
        }
      } else {
        codeMsg += message[cnt];
      }
    }

    return this.bool ? codeMsg : codeMsg.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
