const div = document.querySelector('.kvadrat');
const area = document.querySelector('.con');
let step = 20;
let isshiftpressing = false;

document.body.addEventListener("keyup" ,e =>{
    if (e.key == "ArrowRight") {
        goRight();
    }
    else if(e.key == "ArrowLeft"){
        goLeft();
    }
    else if(e.key == "ArrowDown"){
        goDown();
    }
    else if(e.key == "ArrowUp"){
        goUp();
    }
})
function goRight() {
    let marLeft = div.style.marginLeft ? parseInt(div.style.marginLeft) : 0
    if (marLeft + step <= area.clientWidth - div.clientWidth ) {
        div.style.marginLeft = marLeft + step + "px";        
    }
    else{
        div.style.marginLeft = area.clientWidth - div.clientWidth +"px";
    }
}
function goLeft() {
    let marLeft = div.style.marginLeft ? parseInt(div.style.marginLeft) : 0
    if (marLeft - step >= 0 ) {
        div.style.marginLeft = marLeft - step + "px";        
    }
    else{
        div.style.marginLeft = 0;
    }
}
function goDown() {
    let marUp = div.style.marginTop ? parseInt(div.style.marginTop) : 0
    if (marUp + step <= area.clientHeight - div.clientHeight) {
        div.style.marginTop = marUp + step + "px";
    }
    else{
        div.style.marginTop = area.clientHeight - div.clientHeight + "px";
    }
}
function goUp() {
    let marUp = div.style.marginTop ? parseInt(div.style.marginTop) : 0
    if (marUp - step >= 0) {
        div.style.marginTop = marUp - step + "px";
    }
    else{
        div.style.marginTop = 0;
    }
}
function goShift(e) {
    if (e.keyCode == 16) {
        step*2
    }
}