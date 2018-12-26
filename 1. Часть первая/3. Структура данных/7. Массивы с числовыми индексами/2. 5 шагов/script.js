

var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length-2] = "Классика";
var deleted = styles.shift();
alert(deleted);
styles.unshift("Рэп", "Регги");


