function Animal(nam) {
  this.nam = nam;
  this.ret = () => {
    console.log(this.nam);
  };
}

function ret() {
  console.log(this.nam);
}
const ej = new Animal('ej');
var f =  Animal.ret;
f();
