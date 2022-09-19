"use strict";
function call(callback){
    for(let i=0;i<10;i++){
        callback();
    }
}

call(function(){
    console.log("call function");
})