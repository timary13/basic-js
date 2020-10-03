const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor() {
        this.calculateDepth = this.calculateDepth.bind(this);
    }

    calculateDepth(array) {
        let itemDepth = 0;
        if (Array.isArray(array)) {
            itemDepth = 1 + Math.max(...array.map(this.calculateDepth));
            itemDepth = (itemDepth < 0) ? 1 : itemDepth;
        }
        return itemDepth;
    }
};