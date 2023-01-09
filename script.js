var screen = document.getElementById("screen");
var btns = document.querySelectorAll('button');
var screenValue = "";
for (elem of btns) {
    elem.addEventListener('click', (i) => {
        var btntext = i.target.value;
        if (btntext == 'C') {
            screenValue = "";
            screen.value = screenValue;
            document.getElementById('hist').innerHTML= screenValue;
        }else if (btntext == '='){
            document.getElementById('hist').innerHTML= screenValue;
            screen.value = eval(screenValue);
        }
        else{
            screenValue += btntext;
            screen.value = screenValue;
        }
    })
}
function background(){
    var modes = document.body;
    modes.classList.toggle('bg-light');
}