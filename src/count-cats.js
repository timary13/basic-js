const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((acum, item) => {
    acum += item.filter(item => item === '^^').length;
    return acum;
  }, 0);
};
