const { Console } = require("console");

let data=new Array();
for(let i=0;i<20;i++){
    data.unshift(Math.floor(Math.random()*9+1));

}

console.log(data);

let user=new Set(data);

console.log(user);


user.forEach((item)=>
{
    console.log(item);

});


