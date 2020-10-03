const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' }) {
  const additionStr = (addition !== undefined) ? (Array(additionRepeatTimes).fill(String(addition))).join(additionSeparator) : '';
  const res = (Array(repeatTimes).fill(String(str + additionStr))).join(separator);
  return res;
};
  