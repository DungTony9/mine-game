var a = 1;
var b = 100;
var mine = Math.floor(Math.random()*100)+1;
var A = document.querySelector("#a");
var B = document.querySelector("#b");
var button = document.getElementById("enter-btn");
var bar = document.getElementById("health-bar");
var loseScreen = document.querySelector(".lose");
var winScreen = document.querySelector(".win");
function reset() {
    mine = Math.floor(Math.random()*100)+1;
    a = 1;
    b = 100;
    A.innerText = `${a}`;
    B.innerText = `${b}`;
    clearInput();
    bar.style.right = "0%";
    bar.style.left = "0%";
    bar.style.width = "100%"; 
}
function action(){
    const guess = Number(document.getElementById("guess").value);
    if(guess > b || guess < a) {
        alert('Please re-enter');
        clearInput();
        return;
    }
    if(guess < mine) {
        a = guess;
        A.innerText = `${a}`;
        makeChange()
    }
    else if (guess > mine) {
        b = guess;
        B.innerText = `${b}`;
        makeChange()
    }
    else{
        window.location.href = "lose.html";
    }
    if(b-a <= 2) {
        window.location.href = "win.html";
    }
    clearInput();
    return;
}
button.onclick = function() {
    action();
}
function enterInput(event){
    if(event.which == 13) {    
        action();
    }
}
function clearInput() {
    document.getElementById("guess").value = "";
}
function makeChange() {
    bar.style.left = `${a-1}%`;
    bar.style.width = `${b-a+1}%`;    
    bar.style.right = `${100-b}%`;
    document.getElementById("guess").min = `${a+1}`;
    document.getElementById("guess").max = `${b-1}`;
}
document.addEventListener("keyup", check);
function check(e) {
    if(e.which == 82) reset();
}
