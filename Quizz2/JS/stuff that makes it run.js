// var rawdata= $.get('Questions/Questions.json');
// var data =JSON.parse(rawdata);
// console.log(data);

var currentq = 0;
var score = 0;
var total = questions.length;
console.log(total);
var qplace = document.getElementById('place');
var image = document.getElementById('image');
var opt1 = document.getElementById('but1');
var opt2 = document.getElementById('but2');
var opt3 = document.getElementById('but3');
var opt4 = document.getElementById('but4');


function loadq(i) {
    var q = questions[i];
    qplace.textContent = q.q;
    image.src= q.image;
    opt1.textContent=q.a1;
    opt2.textContent=q.a2;
    opt3.textContent=q.a3;
    opt4.textContent=q.a4;

}

function click() {
    var x = $(this).value();
    if(questions[currentq].c === x){
        score++;
    }
    currentq++;
    if(total == currentq){
        alert(score);
    }
    loadq(currentq);

}
console.log(score);
loadq(currentq);
