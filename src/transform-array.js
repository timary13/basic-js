const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i += 1;
        break;
      case '--discard-prev':
        if(arr[i - 2] !== '--discard-next') {
          const prevArr = arr[i - 1];
          if(res.includes(prevArr)) res.pop();
        }
        break;
      case '--double-next':
        const next = arr[i + 1];
        if(next !== undefined) res.push(next);
        break;
      case '--double-prev':
        if(arr[i - 2] !== '--discard-next') {
          const prev = arr[i - 1];
          if(res.includes(prev)) res.push(prev);
        }
        break;
      default:
        res.push(arr[i]);
        break;
    }
  }
  return res;
};
