"use strict";
const arr=['가','라','다','라','마','라'];

for(var i=0;i<arr.length;i++){ 
    if(arr[i]=='라'){
        arr.splice(i,1);
    }
    
}
console.log(arr);

arr.forEach(function(number,index){
    // if(number=="가"){
    //     arr.splice()
    // }
    console.log(number,index);
})//????
