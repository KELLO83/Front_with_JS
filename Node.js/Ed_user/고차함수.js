
let high=(msg)=>(number)=>{
    console.log(msg);
    console.log(number);
}


let c1=high("msg send");
c1("5");

const func = (msg) => //참고로 화살표 함수 문법에 따라 함수의 본문에서 바로 반환되는 값이 있으면 {와 return을 생략할 수 있습니다.
() => {
   console.log(msg);
};

//python Decorate 
const inner_first = func("first");
const inner_second=func("second");


const hof=(a)=>(b)=>{
    console.log(a,b,Number(a)+Number(b));
}


let n1=hof(5);
console.log(n1);
let n2=n1(3); //b받자마자 바로 {} 내부 실행

