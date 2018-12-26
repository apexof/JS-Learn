/*
var browser = "IE";

switch(browser) {
    case "IE":
        alert('О, да у вас IE!');
        break;
    case 'Opera':
    case 'Safari':
    case 'Firefox':
    case 'Chrome':
        alert('Да, и эти браузеры мы поддерживаем');
        break;
    default:
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}*/
var browser = "Chrosadfme";
if(browser === "IE"){
    alert( 'О, да у вас IE!' );
}else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    alert( 'Да, и эти браузеры мы поддерживаем' );
}else{
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
