var x = [
    {fname: 'Ernestas', age: 26},
    {fname: 'Eimantas', age: 28},
    {fname: 'Tomas', age: 27},
    {fname: 'Mantas', age: 27},
    {fname: 'Tomas', age: 28},
    {fname: 'Mantautas', age: 30},
    {fname: 'Lina', age: 29}
];
console.log(x);

function spaustinti(kas, kur) {
    var X = document.getElementById(kur);
    for (var i = 0; i < kas.length; i++) {
        var dalykas = kas[i];
        X.innerHTML += dalykas.fname + "<br>";
    }
}

spaustinti(x, 'array');