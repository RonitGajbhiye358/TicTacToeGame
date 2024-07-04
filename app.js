let boxes = document.querySelectorAll(".box_gridItem");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");
let game = document.querySelector(".container");
let newGamebtn = document.querySelector(".newGameBtn");
let resetGamebtn = document.querySelector(".resetGameBtn");


let turnO = true; //PlayerO , PlayerX
let count = 0;  //for draw condition

let winnerPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const checkWinner = () => {
    for (const pattern of winnerPatterns) {
        let patvalue1 = boxes[pattern[0]].innerText;
        let patvalue2 = boxes[pattern[1]].innerText;
        let patvalue3 = boxes[pattern[2]].innerText;

        if (patvalue1 !== "" && patvalue2 !== "" && patvalue3 !== "") {
            if (patvalue1 === patvalue2 && patvalue2 === patvalue3) {
                showWinner(patvalue1);
                return true;
            }
        }
    }
}
const resetgame = () =>{
    msgContainer.classList.add("hide");
    enableBoxes();
}
const showWinner = (winner) => {
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulation!.....\nThe winner is ${winner}`;
    disableBoxes();
}

const drawGame = () => {
    msgContainer.classList.remove("hide");
    msg.innerText = `The Game was Draw!....`;
    disableBoxes();
}
const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (const box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    game.classList.remove("hide");
}

boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        if (turnO) {
            // player O
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count == 9 && !isWinner) {
            drawGame();
        }
    })
});


newGamebtn.addEventListener("click", resetgame);
resetGamebtn.addEventListener("click", resetgame);

