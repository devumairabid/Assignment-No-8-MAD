
export{}

var num1:number[]=[10,50,-53,52,-63]
function sumOfAll(arr){
    return arr.reduce((a,b)=>{
        return a+b
    })
}
console.log(sumOfAll([10,50,53,52,63]));
