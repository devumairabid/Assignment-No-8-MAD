export{}
function rotateClock(num,n){
for(var i=0;i<n; i++){

var num1=num.shift();
num.push(num1)
console.log(num);
}
}
let n=4
var num:number[]=[1,2,3,4,5]
rotateClock(num,n)