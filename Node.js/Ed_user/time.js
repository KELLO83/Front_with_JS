
// let count=0
// for (let i=1;i<6;i++){
//     setTimeout(()=>{
//         console.log(count,"번쨰입니다");
//         count+=1;
//     },1000*(i+1))
// }


count=1;
let kk=setInterval(()=>{
    console.log(count,"번째입니다");
    count+=1
},1000)

setTimeout(()=>{
    clearInterval(kk);
},7000) //딱 7초가될떄 종료한다

