let boxes=document.querySelectorAll(".boxes");
let turno=true;
let winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let msgbox=document.querySelector(".msg-box");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#newgame");
let reset=document.querySelector(".reset");
const reserbtn=()=>{
    for(boxe of boxes){
        boxe.innerText="";
        boxe.disabled=false;
    }
    msgbox.classList.add("hide");
}
newgame.addEventListener("click",reserbtn);
reset.addEventListener("click",reserbtn);
const btndisabled=()=>{
    for( boxe of boxes){
        boxe.disabled=true;
    }
}
const checkwinner= ()=>{
    for(pattern of winpattern){
        let patternval1=boxes[pattern[0]].innerText;
        let patternval2=boxes[pattern[1]].innerText;
        let patternval3=boxes[pattern[2]].innerText;
        if(patternval1!="" && patternval2!="" && patternval3!=""){
            if(patternval1===patternval2 &&  patternval2== patternval3){               
                msgbox.classList.remove("hide");
                msg.innerText="congratulation winner is "+ patternval1;
                btndisabled();
            }
        }
    }
}


boxes.forEach((boxe)=>{
    boxe.addEventListener("click",()=>{
        if(turno){
            boxe.innerText="x";
            turno=false;
        }
        else{
            boxe.innerText="o";
            turno=true;
        }
       boxe.disabled=true;
       checkwinner();
    })
})

