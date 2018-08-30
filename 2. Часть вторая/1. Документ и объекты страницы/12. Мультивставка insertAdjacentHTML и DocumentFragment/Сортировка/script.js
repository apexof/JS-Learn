document.addEventListener("DOMContentLoaded", function (){
    function makeTable() {
        var tableHolder = document.getElementById('table-holder');
        var contents = '<thead><th>Имя</th><th>Фамилия</th><th>Отчество</th><th>Возраст</th></thead>';
        contents += '<tbody>';
        for (var i = 0; i < 100; i++) {
            contents += "<tr><td> ... </td><td>Разные</td><td>Данные</td><td>" + ((i + 50) % 30) + "</td></tr>";
        }
        contents += '</tbody>';
        tableHolder.innerHTML = '<table>' + contents + '</table>';
    }
    makeTable();
    function sortOpt(doRemove) {
        var tbody = document.getElementsByTagName('tbody')[0];
        var table = tbody.parentNode;
        if (doRemove) table.removeChild(tbody);
        var rows = [];
        for (var i = 0; i < tbody.children.length; i++) {
            var elem = tbody.children[i];
            rows.push({
                value: elem.lastChild.innerHTML,
                elem: elem
            });
        }
        rows.sort(function(a, b) {
            return a.value - b.value;
        });
        for (var i = 0; i < rows.length; i++) {
            tbody.appendChild(rows[i].elem);
        }
        if (doRemove) table.appendChild(tbody);
    }
    sortOpt();
});