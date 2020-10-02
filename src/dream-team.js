const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  const begins = members.reduce((acum, item) => {
    acum += (typeof item === 'string') ? item.trim()[0].toUpperCase() : '';
    return acum;
  }, '').split('').sort().join('');
  return (begins || false);
};
