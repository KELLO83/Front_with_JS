"use strict";

//function a(){} 호이스팅 지원
//const b=function(){}; 호이스팅 지원 x
//const c=()=>{}; 호이스팅 지원x

function add(){
    return -1;

}
function add(x,y,z){
    return x+y+z;
}

function add(x,y,z){
    return x*y*z;
}
let data;
data=add(3,5,2)
console.log(data);
data=add(1,2,3,4,5,6,7,8,9,10)// 인자는 매개변수갯수보다 많아도상관x
console.log(data);

//맨 마지막의 add만 실행되고 첫번쨰 두번째 선언한 함순느 무시된다
//오버라이딩 지원x 인자에맞춰서 선택적으로함수고르기 불가