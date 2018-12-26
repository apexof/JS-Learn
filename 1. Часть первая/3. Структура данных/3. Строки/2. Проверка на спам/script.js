function checkSpam(str) {
    str = str.toLowerCase();
    if(~str.indexOf("viagra") || ~str.indexOf("xxx")){
        return true;
    }else{
        return false;
    }

}





console.log(checkSpam('buy ViAgRA now')); //== true
console.log(checkSpam('free xxxxx')); //== true
console.log(checkSpam("innocent rabbit"));// == false









