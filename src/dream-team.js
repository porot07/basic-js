const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  const result = members.map(el => {
    if (typeof el === 'string') return el.trim()[0].toUpperCase();
    return;
  }).sort().join('');
  return result;
};
