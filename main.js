var x = true;
var y = true;

function movee() {
    if (x == true) {
        document.getElementById("hh1").style.visibility = "visible";
        x = false;
    } else {
        document.getElementById("hh1").style.visibility = "hidden";
        x = true;
    }
}

function move() {
    if (x == true) {
        document.getElementById("hh2").style.visibility = "visible";
        x = false;
    } else {
        document.getElementById("hh2").style.visibility = "hidden";
        x = true;
    }
}
