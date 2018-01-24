


$(document).ready(function () {

  var target;
  var min;
  var max;
  var crstal1;
  var crstal2;
  var crstal3;
  var crstal4;
  var score = 0;
  var wins = 0;
  var losses = 0;

function startGame(){
  getRandomTarget(19,120);
  addTarget();
  refreshCystals();
  updatingScore();
  clickGems();
}

startGame();

function getRandomTarget(min, max) {
  target =  Math.floor(Math.random() * (max - min + 1) + min);
  console.log(target);
}



function addTarget() {
	$("#random-number").html(target);
	$("#random-number").css({"text-align": "center" , "font-size": "500%"});
}


	var number;
	var total = 0;
	
//genreate a random number for each crystal
//increment the score each time crystal click by the value of that crystal
	function generateRandomCrystalNumber() {
  		
  		var number =  Math.floor(Math.random() * (12 - 1 + 1) + 1);
  		return number;	
	}
  function refreshCystals(){
    

      crstal1 = generateRandomCrystalNumber();
      crstal2=generateRandomCrystalNumber();
      crstal3 = generateRandomCrystalNumber();
      crstal4=generateRandomCrystalNumber();
      

    
  }
  function updatingScore(){
     $("#player-score").html(score);
  }


  function clickGems(){
    
    $("#gem1").click(function(){
      checkGameState()

         score += crstal1;
         updatingScore();
      });
    $("#gem2").click(function(){
      checkGameState()

         score += crstal2;
          updatingScore();
      });
    $("#gem3").click(function(){
      checkGameState()

         score += crstal3;
         updatingScore();
      });
    $("#gem4").click(function(){
      checkGameState()
         score += crstal4;
         updatingScore();

    });



}
function checkGameState() {
  if (score === target) {
    wins++;
    $("#win-count").text(wins);
    startGame()
  } else if(score > target){
    losses++;
    $("#loss-count").text(losses);
    startGame();
  }
}
   // total = total + number;

    //console.log(total);







});
