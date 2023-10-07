let turnM=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let isgameover=false
let reset=document.getElementById("reset")
let turn="X"

// Change turn
const changeturn=()=>{
    return turn ==="X"?"0":"X"
}

// Check win
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext")
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Won"
            isgameover=true
            document.querySelector("img").style.width="150px"
            gameover.play();
        }
    })
}

// Game Logic
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
        if(boxtext.innerText==="")
        {
            boxtext.innerText=turn;
            turn=changeturn();
            turnM.play();
            checkwin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let bostexts=document.querySelectorAll(".boxtext");
    Array.from(bostexts).forEach(element=>{
        element.innerText="";
    });
    turn="X"
    isgameover=false
    document.querySelector("img").style.width="0"
    if(!isgameover)
    {
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    }
})
