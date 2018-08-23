function calc() {
    try {
        let str = prompt("Введите выражение", "");
        let res = eval(str);
        if(isNaN(res)){
            throw new SyntaxError("Нехуй ноль на ноль делить");
        }else{
            return res;
        }
    } catch(e){
        alert('Ошибка ' + e.name + ":" + e.message);
        return calc();
    }
}
console.log(calc());