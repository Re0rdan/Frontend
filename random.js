var xx =" " ;
function gauti(a) {
    var x = document.getElementById(a).value;
    var y = parseInt(x);
    return y;
}

function rez(a) {
    var x = document.getElementById('rezultatas').innerHTML;
    var y = x+ " " + a;
    return document.getElementById('rezultatas').innerHTML = y;
}

function sudeti() {
    var a = gauti('A');
    var b = gauti('B');
    sum = a + b;
    rez(sum);
}

function atimti() {
    var a = gauti("A");
    var b = gauti("B");
    sum = a - b;
    rez(sum);
}

function dauginti() {
    var a = gauti("A");
    var b = gauti("B");
    sum = a * b;
    rez(sum)
}

function dalinti() {
    var a = gauti("A");
    var b = gauti("B");
    sum = a / b;
    rez(sum);
}


