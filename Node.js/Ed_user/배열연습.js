/* 
find findindex 
map filter sort
indexOf includes
*/

let data=[]
for(let i=0;i<10;i++){
data.push(Math.floor(Math.random()*10+5))
} //
console.log(data);

let find_value;
find_value=data.find((value,index)=>{ 
    if(value==6){
        return true;
    }
})

console.log(find_value);


let find_idx;
find_idx=data.findIndex((value)=>value==7);
console.log(find_idx);


let indexOf_res;
indexOf_res=data.indexOf((item)=>{
    if(item==7){
        return true;
    }
})
console.log(indexOf_res);

console.log(data.map((value)=>value*2));

console.log(data.filter(item=>item>10))


console.log(data.sort((a,b)=>a-b));

let ck=function(a,b){
    if(a>b){
        return 1
    }
    else if(a==b){
        return 0
    }
    else{
        return -1
    }
}
console.log(data.sort(ck))


console.log(data);
console.log(data.reverse());


let user=[1,3,5,7,9];
let res;
user.forEach((item)=>{
    console.log(item);

})

console.log("5는 몇번쨰 idx",user.indexOf(5));
console.log("리스트에서 5를 포함하고있나요?",user.includes(5));



