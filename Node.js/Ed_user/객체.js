let user={
    name:"kello",
    year:1994,
    month:12,
    date:6,
}


console.log(user['name']);
console.log(user.name);
delete user.date;

console.log(user);


for( i in user){
    console.log(i);
    console.log(user[i])
}


console.log("name" in user);

console.log(user);


delete user.month;


console.log(user);

