function test(...args){ //리스트로 가변인수를 받는다.
    console.log(typeof(args));
    console.log(args)
    console.log(Array.isArray(args));
}


test(1,2,3,4,5);
