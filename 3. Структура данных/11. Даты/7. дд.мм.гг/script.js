var d = new Date(2014, 11, 1); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'


function formatDate(dt) {
   var y = String(dt.getFullYear()).slice(2);
   var m = String(dt.getMonth() + 1);
   m = (m.length < 2) ? "0" + m : m;
   var d = String(dt.getDate());
   d = (d.length < 2) ? "0" + d : d;
   return d + "." + m + "." + y;
}