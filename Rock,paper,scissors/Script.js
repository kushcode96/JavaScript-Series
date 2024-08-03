let userscore = 0;
let compscore = 0;
 
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#result");

let userpara = document.querySelector("#user");
let comppara = document.querySelector("#comp");


  
    const getcomputer = ()=>{
          const options = ["rock", "paper","scissors"];
            const ranidx = Math.floor(Math.random()*3);
            return options[ranidx];
    }
 const drawgame = ()=>{
       msg.innerText = "Game is draw ! play again.."
       msg.style.backgroundColor = "#061A23"
       console.log("game is draw")
 }
  const showwin = (userwin,userchoice,compchoice)=>{
      if(userwin){
        userscore++;
        userpara.innerText = userscore;
        msg.innerText = `You Win ,  ${userchoice} beats ${compchoice} `
        msg.style.backgroundColor = "green"
      
      }
      else{
        compscore++;
        comppara.innerText = compscore;
        msg.innerText = `You Lost ,  ${compchoice} beats ${userchoice} `
        msg.style.backgroundColor = "red"
      
      }
  }
  const playgame =(userchoice)=>{
         let compchoice = getcomputer();
          
         if(userchoice === compchoice){
            drawgame();
         } else{
            let userwin = true;
            if(userchoice === "rock"){
                userwin = compchoice === "paper"? false:true;
            }
            else if(userchoice === "paper"){
                userwin = compchoice === "scissors"? false:true;
               
            }
            else{
                userwin = compchoice === "rock"? false:true;
            }
            showwin(userwin,userchoice,compchoice);
         }
         
  }

choices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
         const userchoice = choice.getAttribute("id");
         playgame(userchoice);
      })
})