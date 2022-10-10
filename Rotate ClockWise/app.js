"use strict";
exports.__esModule = true;
function rotateClock(num, n) {
    for (var i = 0; i < n; i++) {
        var num1 = num.shift();
        num.push(num1);
        console.log(num);
    }
}
var n = 4;
var num = [1, 2, 3, 4, 5];
rotateClock(num, n);
