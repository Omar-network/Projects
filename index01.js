// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtnseBtn = document.getElementById("resetBtn");
const increaseBtnreaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreasBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}