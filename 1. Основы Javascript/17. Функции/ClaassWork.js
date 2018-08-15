// Локальные переменные, объявленные внутри функции видны только внутри
// Блоки if/else, switch, for, while, do..while не влияют на область видимости переменных.
// Функция может обратиться ко внешней переменной
// Переменные, объявленные на уровне всего скрипта, называют «глобальными переменными».
// Если параметр не передан при вызове – он считается равным undefined
// При объявлении функции необязательные аргументы, как правило, располагают в конце списка.
// ------------------------------------------------------
// Для указания значения «по умолчанию», то есть, такого, которое используется, если аргумент не указан, используется два способа:
// 1. Можно проверить, равен ли аргумент undefined, и если да – то записать в него значение по умолчанию. Этот способ продемонстрирован в примере выше.
if (text === undefined) {
    text = 'текст не передан';
}
// 2. Использовать оператор ||:
function showMessage(from, text) {
    text = text || 'текст не передан';
    return text;
}
// -------------------------------------------------------
// Если аргументов передано больше, чем надо,
// например showMessage("Маша", "привет", 1, 2, 3),  то ошибки не будет.
// Но, чтобы получить такие «лишние» аргументы,
// нужно будет прочитать их из специального объекта arguments
// ----------------------------------return------------------------------------
//     В случае, когда функция не вернула значение или return был без аргументов, считается что она вернула undefined:
