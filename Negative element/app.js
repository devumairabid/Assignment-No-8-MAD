// var numbers:number[]=[10,12,-25,56,-45,56,-54]
// let negNumber:number=0;
// let posNumber:number=0;
// for(let number of numbers){
//     if (number<0) {
//         negNumber++
//     }
//     else{
//         posNumber++
//     }
// }
// console.log(`${negNumber } is neg`);
// console.log(`${posNumber} is pos`);
// console.log(numbers);
// var number1:number[]=[120,52,63,85,20]
// function sumOfArr(arr){
//     return arr.reduce((a,b)=>{
//         return a+b
//     })
// }console.log(sumOfArr([120,52,63,85,20]));
var numbers = [10, 15, 25, 36];
var number = numbers.sort(function (a, b) { return b - a; });
console.log(numbers[1]);
