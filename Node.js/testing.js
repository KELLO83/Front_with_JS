
let user=[ //객체
{id:1,name:"kello"},//arr[0]
{id:2,name:"pete"},//arr[1]
{id:3,name:"world"},//arr[2]
];
// []리스트안에 객체가 [0]번지안에 {id:1,name="kello",id:2,name:"pete",id:3,name:"world"}
console.log(user)
console.log(Array.isArray(user)) //TYPE ARRAY 1칸 0번지
console.log(user.length);
let res=user.find((value)=>value.id==1) //arr.find(fn) true일시 해당요소를 반환하고 멈춤 없으면 undefined반환
console.log(res)//


let res_value=user.find((item)=>item.name == "pete")//id:2가 나와야하지만 1과pete가 출력되고있다 ..?
console.log("result ", res_value);//????질문 대기..

var retvalue = user.find(function(data) { return data.name == 'pete'});
console.log("결과",retvalue);
