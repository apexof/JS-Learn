// Function declaration
function name(arg1){
    return arg1;
}

// Function Expression
let name1 = function name2(arg1){
    name2(1); // для рекурсивного обращения
    return false;
};

// функция стрелка, arrow Function
let func3 = (a, b) => a+b;
//или
let func4 = (a, b) => {
    return a + b;
};



// свойство-функция объекта
let obj = {
  name: function name2(){
      name2();
      this.name();
  },
  func2 (a, b){
      return a + b;
  }
};