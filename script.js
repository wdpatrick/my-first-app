let number=0;
function increaseNumber() {
    number = number + 10;
    document.getElementById("number").textContent = number;
}
function resetNumber() {
    number = 0;
    document.getElementById("number").textContent = number;
}


