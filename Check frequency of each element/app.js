var arr = [1, 5, 3, 5, 1, 8, 9, 1, 5];
var counts = {};
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var num = arr_1[_i];
    counts[num] = counts[num] ? counts[num] + 1 : counts[num] = 1;
}
console.log(counts);
