const CustomError = require("../extensions/custom-error");

module.exports = counstCats = (matrix) => {
  let result = 0;
  for (let arr of matrix) {
    for (let char of arr) {
      if (char === "^^") {
        result += 1;
      }
    }
  }
  return result;
}
