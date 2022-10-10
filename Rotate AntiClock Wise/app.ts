export{}

function arrRotate(num,n) {
    

for(var i=0;i<n;i++){

var num1=num.pop()
num.unshift(num1)
console.log(num);
}}
let n=3
var num:number[]=[1,2,3,4,5]
arrRotate(num,n)