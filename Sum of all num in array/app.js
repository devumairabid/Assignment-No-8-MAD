"use strict";
exports.__esModule = true;
var num1 = [10, 50, -53, 52, -63];
function sumOfAll(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    });
}
console.log(sumOfAll([10, 50, 53, 52, 63]));
