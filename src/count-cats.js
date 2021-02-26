const CustomError = require("../extensions/custom-error");

module.exports = countCats = (matrix) => matrix.reduce((acc, arr) => arr.find(el => el === "^^") === "^^" ? acc + 1 : acc, 0);
