const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i += 2;
        break;
      case '--discard-prev':
        res.pop();
        break;
      case '--double-next':
        const next = arr[i + 1];
        if(next !== undefined) res.push(next);
        break;
      case '--double-prev':
        const prev = arr[i - 1];
        if(prev !== undefined) res.push(prev);
        break;
      default:
        res.push(arr[i]);
        break;
    }
    // console.log(res, i);
  }
  console.log(res);
  return res;
};
