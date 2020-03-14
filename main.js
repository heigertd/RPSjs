var options = 'Rock'
var options2 = ['Rock', 'Paper', 'Scissors'];
var CPU2 = CPUoption2(options2)



function CPUoption2(options2){
  return CPU2 = options2[Math.floor(Math.random()*options2.length)];
}



function levelSelect(){
  var element = document.getElementById("level1");
  element.classList.add("backgroundYellow");
  var element = document.getElementById("level2");
  element.classList.remove("backgroundYellow");
  CPU2 = options
}

function levelSelect2(){
  var element = document.getElementById("level1");
  element.classList.remove("backgroundYellow");
  var element = document.getElementById("level2");
  element.classList.add("backgroundYellow");
}


//reveal the result
function playerWin() {
    var element = document.getElementById("win");
    element.classList.remove("transparent");
    element.classList.add("appear");
  }

function playerLost() {
    var element = document.getElementById("lost");
    element.classList.remove("transparent");
    element.classList.add("appear");
  }  

function playerDraw() {
    var element = document.getElementById("draw");
    element.classList.remove("transparent");
    element.classList.add("appear");
  } 

function tryAgain(){
  var element = document.getElementById("win");
  element.classList.add("transparent");
  element.classList.remove("appear");
  var element = document.getElementById("lost");
  element.classList.add("transparent");
  element.classList.remove("appear");
  var element = document.getElementById("draw");
  element.classList.add("transparent");
  element.classList.remove("appear");
}
//decides if player wins or loses

function personScissors(){  
if (CPU2 === 'Rock'){
    playerLost();
            }
    else if (CPU2 === 'Paper')
    {
    playerWin();
    }else{
        playerDraw();
    }
}

function personRock(){    
    if (CPU2 === 'Paper'){
        playerLost();
                }
        else if (CPU2 === 'Scissors')
        {
       playerWin();
        }else{
        playerDraw();    
        }
    }

    function personPaper(){    
        if (CPU2 === 'Scissors'){
            playerLost();
                    }
            else if (CPU2 === 'Rock')
            {
            playerWin();
            }else{
            playerDraw();
            }
        }

