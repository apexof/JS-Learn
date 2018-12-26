var leader = {
    name: "Василий Иванович"
};

var soldier = {
    name: "Петька"
};




// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];
team.toJSON = function () {

};

var newTeam = JSON.stringify(team);
console.log(newTeam);