const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  sampleActivity = (typeof sampleActivity === 'string' && parseInt(sampleActivity)
      && parseInt(sampleActivity) > 0 && parseInt(sampleActivity) < 15) || false;
  if(!sampleActivity) return false;
  const ln = Math.log(MODERN_ACTIVITY / sampleActivity).toFixed(3);
  const k = ln / HALF_LIFE_PERIOD;
  const resT = ln / k;
  return resT;
};
