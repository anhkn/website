$(document).ready(function(){
    var i = 0;
    var txt = "Welcome!";
    var speed = 75;
    setTimeout(typeWriter, 75);

    function typeWriter() {
        if (i < txt.length) {
        document.getElementById("title-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
    }

    $("#subtitle").append("I'm Kien Nguyen, a second-year computer science student at Princeton University.");
    $("#subtitle").hide().delay(2500).fadeIn(1000);
});
