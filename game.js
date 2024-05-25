const choice=document.querySelectorAll(".choice");
const youscore=document.querySelector("#userscore");
const computerscore=document.querySelector("#compscore");
const parah=document.querySelector("#game");
let userscore=0;
let compscore=0;
const compchoice=()=>{
    choiceavail=["rock","paper","scissor"];
    let choiceindx= Math.floor(Math.random()*3);
      return(choiceavail[choiceindx]);
};
const draw=()=>{
    console.log("game is draw");
    parah.innerText="the game is draw .play again!";
    parah.style.backgroundColor="blue";
};
const showwin=(userwin)=>{
    if(userwin){
        userscore++;
        youscore.innerText=userscore;
        parah.innerText="you won";
        parah.style.backgroundColor="green";
        console.log("you won");
    }else{
        compscore++;
        computerscore.innerText=compscore;
        parah.innerText="you lose";
        parah.style.backgroundColor="red";
        console.log("you lose");
    }
}
const playgame=(userchoice)=>{
    console.log(userchoice);
    const compchoose=compchoice();
    console.log(compchoose);
    if(userchoice === compchoose){
        draw();

    }else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoose=="paper"? false :true;
        }else if(userchoice=="paper"){
            userwin = compchoose=="scissor" ? false:true;
        }else{
            userwin = compchoose=="rock" ? false:true;
        }
        
        showwin(userwin);
        
    }

};
choice.forEach((node)=>{
    node.addEventListener("click",()=>{
        let userchoice=node.getAttribute("id");
        playgame(userchoice);
    });

});