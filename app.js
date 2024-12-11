let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');

let turnO = true;

const winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
    });
})

function showWinner(a) {
    alert(`${a} has Won the Game !!! `)
    for (let box of boxes) {
        box.disabled = true;
    }
}

function drawGame() {
    alert("Game is Draw Start Again...")
}
function checkWinner() {
    for (let win of winningConditions) {
        let a = boxes[win[0]].innerText;
        let b = boxes[win[1]].innerText;
        let c = boxes[win[2]].innerText;
        if (a !== "" && b !== "" && c !== "") {
            if (a === b && b === c) {
                console.log("winner is ", a)
                showWinner(a)
            }
        }
    }
}

resetBtn.addEventListener('click', () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    turnO = true;
})
