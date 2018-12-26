list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    if (list.next !== null)
    printList(list.next);
    console.log( list.value );
}

printList(list);

/*
function printList(list) {
    var tmp = list;
    while (tmp) {
        alert( tmp.value );
        tmp = tmp.next;
    }
}
*/