const { cp } = require("fs");

let data=new Array();
data[0]=0;

console.log(data);

console.log(Array.isArray(data));

for(let i=0;i<5;i++){
    data.push(Math.round(Math.random()*9+1))
}
console.log(data);

data=data.map((value,index)=>{
    return index+1;
})
console.log(data);


data.splice(1,2); //원본 배열에서 첫번쨰 idx부터 2개의원소를 잘라버림
console.log(data);


data.unshift(2,3);
console.log(data);

data.slice(1,3) // 첫번쨰부터 2번쨰까지 [1,3)
console.log(data); //원본 데이타 변경 x


console.log("숫자 4의 idx위치는?",data.indexOf(4)); //실패시 -1
console.log("숫자 4를 포함하고있나요?",data.includes(4));// 실패시 false

let buffer=new Array();

data.forEach((value,index)=>{
    buffer.push(value);
})
console.log(buffer);

// for(let value in buffer){
//     console.log(value);
// }

buffer.sort((a,b)=>b-a);
console.log(buffer);
console.log(buffer.reverse());

console.log(buffer.filter((et)=>{ //원본데이터 변경x
    if (et>5){
        return true;
    }
    else{
        return false;
    }
}))
buffer.push(4);
buffer.unshift(4);
console.log(buffer);


console.log(buffer.find((value)=>{ //처음으로 나오는 요소값을찾아 요소값을 반환한다
    if(value>3){
        return true;
    }
}))


console.log(buffer.findIndex(value=>{ //청므으로나오는 요소값을찾아 idx번호를 반환한다
    if(value==5){
        return true;
    }
}))

copy_list=Array.from(buffer);
console.log(copy_list);
