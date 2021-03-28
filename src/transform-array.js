const CustomError = require('../extensions/custom-error');

module.exports = function transform(array = []) {
  if (!array instanceof Array) return new Error();

  const result = [];
  for (let cnt = 0; cnt < array.length; cnt += 1) {
    switch (array[cnt]) {
      case '--double-next':
        if (cnt < array.length - 1) {
          result.push(array[cnt + 1]);
        }
        break;
      case '--double-prev':
        if (cnt > 0) {
          result.push(result[result.length - 1]);
        }
        break;
      case '--discard-next':
        if (cnt < array.length) {
          result.push(null);
          cnt += 1;
        }
        break;
      case '--discard-prev':
        if (cnt > 0) {
          result.pop();
          break;
        }
        break;
      default:
        result.push(array[cnt]);
    }
  }
  return result.filter((el) => el !== null);
};
