module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  else if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Unable to determine the time of year!');
  const month = date.getMonth();

  if (month > 1 && month <= 4) {
    return 'spring';
  } else if (month > 4 && month <= 7) {
    return 'summer';
  } else if (month > 7 && month <= 10) {
    return 'autumn';
  } else if (month === 0 || month === 1 || month === 11) {
    return 'winter';
  }
};
