var vasya = { name: "Вася", age: 18 };
var masha = { name: "Маша", age: 23 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];


people.sort(fn);

function fn (a, b){
    return a.age - b.age;
}
// теперь people: [vovochka, masha, vasya]
console.log(people); // 6



/*

for (var i = 0; i < people.length; i++){
    for(var j = i + 1; j < people.length; j++){
        if(people[j].age < people[i].age) {
            var x = people[i];
            people[i] = people[j];
            people[j] = x;
        }
    }
}*/
