let turn = "X";
let gameover = false;

const changeturn = ()=>{
    return turn === "X"?"O":"X"
}

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach((e)=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won";
            document.getElementById("image").style.width = "100px";
            gameover = true;
        }
    })
}

let tiles = document.getElementsByClassName("tile");
Array.from(tiles).forEach((element)=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(!gameover && boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }
        }
    })
})

let reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
    let box = document.querySelectorAll(".boxtext");
    Array.from(box).forEach((element)=>{
        element.innerText = "";
    })
    gameover = false;
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.getElementById("image").style.width = "0px";
})