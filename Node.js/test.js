const readline = require("readline");


rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
 
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el)); // 1 2 3 4
    rl.close();
});
 
rl.on('close', () => {
    input.forEach(el => {
        console.log(el);
    })
    process.exit();
})
 
// 입력
// 1 2 3
 
// 출력
// 1
// 2
// qqqqqqqq3