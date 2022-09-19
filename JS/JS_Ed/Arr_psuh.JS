"use strict";
let data=['서울','부산','군포','대구','대전'];

data.push("세종")
console.log(data);


data.splice(5,1);
console.log(data);

let kdata=['서울','부산','청주','대구'];




kdata.forEach(function(number){ //for each문읉 통한 arr순회방법
    console.log(number);
})

kdata.forEach(function(number,index){ //for each문을통한 arr에 index부여하기
    console.log(number,index);
})

//첫번쨰인자는 value 두번쨰인자는 index 