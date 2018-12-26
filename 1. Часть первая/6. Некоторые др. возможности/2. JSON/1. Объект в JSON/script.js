var leader = {
    name: "Василий Иванович",
    age: 35
};

var myJson = JSON.stringify(leader);

console.log(myJson);

var myObj = JSON.parse(myJson);
console.log(myObj);