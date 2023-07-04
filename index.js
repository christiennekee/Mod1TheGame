const gridItems = Array.from(document.getElementsByClassName("grid-item"));
console.log(gridItems);

let activePlayer;
const Player1 = "X"
const Player2 = "O"
const winner = document.getElementById("winner");
activePlayer = Player1;
let clickable= true;
const winngConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]
];

let squaresChosen =[
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

console.log(gridItems);

for(let i=0; i<gridItems.length; i++){
  gridItems[i].addEventListener("click",function(event){
    if(!clickable){
      return;
    }
    let item = event.target;
    console.log(item);
    
    if (activePlayer === Player1){
      if(squaresChosen[i]===""){
        item.innerHTML = Player1;
        squaresChosen[i] = activePlayer
        activePlayer = Player2;
        console.log(activePlayer);
      }
      

    }else if(activePlayer === Player2){
      if(squaresChosen[i]===""){
      item.innerHTML = Player2;
      squaresChosen[i] = activePlayer
      activePlayer = Player1;
      console.log(activePlayer);
      }
      console.log(squaresChosen);

        }
    for (let i=0; i<winngConditions.length; i++){
      let optionA = winngConditions[i][0];
      let optionB = winngConditions[i][1];
      let optionC = winngConditions[i][2];
      
      if(squaresChosen[optionA]=== Player1 && squaresChosen[optionB]=== Player1 && squaresChosen[optionC]=== Player1){
        console.log("X WINS!");
        winner.innerHTML = "X WINS!"
        clickable = false;
        break;
      }
      else if(squaresChosen[optionA]=== Player2 && squaresChosen[optionB]=== Player2 && squaresChosen[optionC]=== Player2){
        console.log("O WINS!")
        winner.innerHTML = "O WINS!"
        clickable = false;
        break;
      }
    }
    if(!squaresChosen.includes("")&& clickable){
      console.log("It's A Tie!");
      winner.innerHTML = "It's A Tie"
      clickable=false
    }
  })
}

      // function determineWinner(Player1, Player2)
      //   if(Player1 === squaresChosen && squaresChosen === winngConditions){
      //     console.log("X WINS!!"); 
      //   }
      //   else if (Player2 === squaresChosen && squaresChosen === winngConditions){
      //     console.log(" O WINS!!"); 

      // Get the button element


var refreshButton = document.getElementById('playAgain');

play.addEventListener('click', function() {
    location.reload();
});
