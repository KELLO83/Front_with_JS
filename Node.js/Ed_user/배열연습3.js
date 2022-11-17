let user="i love kor";
let convert_list=user.split('');//문자열에서 각단어마다 쪼깨서 리스트에저장
console.log(convert_list);


convert_list=convert_list.filter((item)=>{ //공백을 제거하는 filter함수
    if(item!=" "){
        return true;
    }
})
console.log(convert_list);


let combine_str=convert_list.join('');
console.log(combine_str);


//split -> str convert list
// join -> list convert str


let list_first=[];
let list_second=[];
let number=new Array(10).fill().map((item,index)=>index+1);
console.log(number);

for (let i=0;i<5;i++){
    idx=Math.floor(Math.random()*number.length);
    list_first.unshift(number[idx]);
    number.splice(idx,1);
}
list_second=Array.from(number);


console.log(list_first,list_second,number);


console.log(list_first.concat(list_second)); //합치기
