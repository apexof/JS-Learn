var first = function me(a) {
    console.log(a);
    console.log(me.num);
    me.num = 66;
};
first.num = 33;
first("qwe");
console.log(first.num);
