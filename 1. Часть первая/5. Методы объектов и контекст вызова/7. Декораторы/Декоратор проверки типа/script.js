function checkPermissionDecorator(f) {
    return function() {
        if (isAdmin()) {
            return f.apply(this, arguments);
        }
        alert( 'Недостаточно прав' );
    }
}

function save() {

}

save = checkPermissionDecorator(save);
// Теперь вызов функции save() проверяет права