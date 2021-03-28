const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr = []) {
    let counter = 1;
    let depth = 0;

    arr.forEach((el) => {
      if (el instanceof Array) {
        counter = this.calculateDepth(el);
        if (depth < counter) depth = counter;
      }
    });

    return depth + 1;
  }
};