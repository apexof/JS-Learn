var startInterval = 25;
var endInterval = 100;
e: for(var num = startInterval; num <= endInterval; num++){
    for(var i = 2; i < num; i++){
        if(num%i === 0) continue e;
    }
    console.log(num);
}
