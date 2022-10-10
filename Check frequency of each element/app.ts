var arr:number[]=[1,5,3,5,1,8,9,1,5]
var counts={}
for(let num of arr){
    counts[num] =counts[num] ? counts[num] +1 :counts[num]=1
}
console.log(counts);
