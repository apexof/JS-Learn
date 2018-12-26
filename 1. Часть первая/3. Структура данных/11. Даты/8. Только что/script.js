function formatDate(date) {
    var now = new Date();
   if(now - date <= 1){
      return "Только что";
   }else if(now - date <= 30000){
       return "30 сек. назад";
   }else if(now - date <= 5 * 60 * 1000){
       return "5 мин. назад";
   }else{
       var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, now.getHours(), now.getMinutes());
      return tomorrow;
   }
}

alert( formatDate(new Date(new Date - 1)) ); // "только что"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"