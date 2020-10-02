const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if(isNaN(date.getTime())) throw Error('Date argument is invalid!');
  const seasons = [...Array(2).fill('winter'), ...Array(3).fill('spring'), ...Array(3).fill('summer'), ...Array(3).fill('autumn'), 'winter'];
  const month = date.getMonth();
  return seasons[month];
};
