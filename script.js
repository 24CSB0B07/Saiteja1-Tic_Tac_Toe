let con=document.querySelector(".container");
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newBtn=document.querySelector(".new-btn");
let msgCon=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgCon.classList.add("hide");
    con.classList.remove("hide");
    resetBtn.classList.remove("hide");
}

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgCon.classList.remove("hide");
    con.classList.add("hide");
    resetBtn.classList.add("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos0Val=boxes[pattern[0]].innerText;
        let pos1Val=boxes[pattern[1]].innerText;
        let pos2Val=boxes[pattern[2]].innerText;
        if(pos0Val!="" && pos1Val!="" && pos2Val!=""){
            if(pos0Val===pos1Val && pos1Val===pos2Val){
                showWinner(pos0Val);
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);