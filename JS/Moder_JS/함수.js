function showMessage(){ // 함수 기본형
    alert("안녕하세요");
}
function mes(from,text){
    alert(from+":"+text);
}

let sayHi=function(){ //함수표현식으로 함수구현
    alert("hello");
}


let ask=function(question,yes,no){ //call back 함수
    if(confirm(question)) yes(); //사용자가 확인을 누르면 confrim은 return true 아니면 false
    else no();
}

let showok=function(){
    alert("동의");

}
let shrefuse=function(){
    alert('거절');
}

/* ask의 인수 ,showok showrefuse 은 콜백함수라고 부른다
함수를 함수의 인수로 전달하고 필요하다면 그함수를 나중에 호출하는것이 콜백함수의 개념*/
/*함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다. 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다. 
*/

let func=(arg1,arg2)=>expression //화살표 함수


let sum=(a,b)=>a+b;

let hello=()=>alert('안녕하세요'); //화살표함수 방식도 함수표현식처럼 작옹
hello();
