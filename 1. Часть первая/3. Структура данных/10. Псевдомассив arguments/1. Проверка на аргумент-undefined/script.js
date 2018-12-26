function f(x) {
    alert( arguments.length ? 1 : 0 );
}

f(undefined);
f();

// Узнать количество реально переданных аргументов можно по значению arguments.length:
