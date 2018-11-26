var state = false;
var foto  = document.getElementById('lempa');
function lempute() {
    if (state) {
        foto.src = '/img/Lempute-off.png';
    } else {
        foto.src = '/img/Lempute-on.png';

    }
    state = !state;
}