const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  if (options.repeatTimes === 0) return str;
  if (!('repeatTimes' in options)) options.repeatTimes = 1;
  if (!('separator' in options)) options.separator = '+';
  if (!('addition' in options)) options.addition = '';
  if (!('additionRepeatTimes' in options)) options.additionRepeatTimes = 1;
  if (!('additionSeparator' in options)) options.additionSeparator = '|';

  const repeatArray = Array.from(new Array(options.repeatTimes), (_) => str);
  const additionRepeatArray = Array.from(new Array(options.additionRepeatTimes), (_) => `${options.addition}`);
  const additionText = additionRepeatArray.join(options.additionSeparator);
  return repeatArray.map((el) => `${el}${additionText}`).join(options.separator);
};
