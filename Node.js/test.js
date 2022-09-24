const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
rl.question('What do you think of Node.js? ', (answer) => {
  // 입력값이 answer매개변수로 들어온다.
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});