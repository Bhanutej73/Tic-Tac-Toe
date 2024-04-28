let btns=document.querySelectorAll(".button");
let reset=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let playerX=true;
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame=()=>{
    reset.addEventListener("click",()=>{
        playerX=true;
        enable_buttons();
        msgContainer.classList.add("hide");
        count=0;
    });
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if (playerX) {
            btn.innerText="X";
            playerX=false;
        }else{
            btn.innerText="O";
            playerX=true;
        }
        btn.disabled=true;
        count++;
        let isWinner=checkwinner();

        if (count>=9 && !isWinner) {
            game_tied();
        }
    });
});

const disable_buttons=()=>{
    btns.forEach((btn)=>{
        btn.disabled=true;
    });
}

const enable_buttons=()=>{
    btns.forEach((btn)=>{
        btn.disabled=false;
        btn.innerText="";
    });
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is, ${winner}`;
    msgContainer.classList.remove("hide");
}

const game_tied=()=>{
        msg.innerText=`Well Played! It's a tie`;
        msgContainer.classList.remove("hide");
    
}

const checkwinner=()=>{
    for (const pattern of winPatterns) {        
        let pos1=btns[pattern[0]].innerText;
        let pos2=btns[pattern[1]].innerText;
        let pos3=btns[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3) {
                showWinner(pos1);
                disable_buttons();
                return true;
            }
    }
}
}

resetgame();