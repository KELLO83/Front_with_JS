let data=Array()
for(let i=0;i<10;i++){
    tmp=Math.ceil(Math.random()*20+5) //5~ 24끼지
    data.push(tmp);
}
console.log(data);


for (let i of data){
    console.log(i)
}


console.log(data);
let not_overlap=new Set(data);
console.log(not_overlap);



