var numbers = [10, 12, 36, 86, -52, 0, -79];
var number1 = Math.min.apply(Math, numbers);
var number2 = Math.max.apply(Math, numbers);
console.log("".concat(number2, " is max & ").concat(number1, " is min "));
