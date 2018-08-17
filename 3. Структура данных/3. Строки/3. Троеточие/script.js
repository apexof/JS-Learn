function truncate(str, maxlength) {
    if(str.length > maxlength){
        return str.slice(0, maxlength - 3) + "...";
    }else{
        return str;
    }
}




console.log(truncate("ПриветСукаБро", 10));










