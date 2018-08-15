// Оператор switch предполагает строгое равенство ===
// Если ни один case не совпал – выполняется (если есть) вариант default.
var a = 2 + 2;
switch (a) {
    case 3:
        alert( 'Маловато' );
        break;
    case 4:
        alert( 'В точку!' );
        break;
    case 5:
        alert( 'Перебор' );
        break;
    default:
        alert( 'Я таких значений не знаю' );
}

// Если break нет, то выполнение пойдёт ниже по следующим case,
// при этом остальные проверки игнорируются.