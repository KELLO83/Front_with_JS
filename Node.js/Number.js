const readline = require('readline');
 
// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let N; // 정수를 저장할 변수
rl.on("line", function(line){
    console.log(`print input string ${line}`);
    N = Number(line);
    console.log(`print input number ${N}`);
    rl.close();
})

