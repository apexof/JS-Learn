document.addEventListener("DOMContentLoaded", function (){
    var field = document.getElementById('field');
    var ball = document.getElementById('ball');
    var wBall = ball.offsetWidth / 2;
    var hBall = ball.offsetHeight / 2;
    var fieldW = field.clientWidth - wBall;
    var fieldH = field.clientHeight - hBall;
    field.onclick = function (e) {
        let top_of_field = field.getBoundingClientRect().top - field.clientTop;
        let left_of_field = field.getBoundingClientRect().left - field.clientLeft;
        let leftPos = e.clientX - left_of_field - wBall;
        if(leftPos < wBall) leftPos = wBall;
        if(leftPos > fieldW) leftPos = fieldW;
        let topPos = e.clientY - top_of_field - hBall;
        if(topPos < hBall) topPos = hBall;
        if(topPos > fieldH) topPos = fieldH;
        ball.style.top = topPos + "px";
        ball.style.left = leftPos + "px";
    }
});