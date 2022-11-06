const { minSatisfying } = require("semver");

let number=Array(10).fill().map((item,index)=>index+1);
console.log(number);
let shuffle_list=[]

orgin_len=number.length;
for (let i=0;i<orgin_len;i++){
    tmp=Math.floor(Math.random()*number.length);
    shuffle_list.push(number[tmp]);
    number.splice(tmp,1);
}
console.log(number);
console.log(shuffle_list);