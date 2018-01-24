

var random;
var min;
var max;
var number;
function getRandomInt(min, max) {
  random =  Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
}

getRandomInt(10,20);


$(document).ready(function () 
{
	$("#random-number").append(random);
	$("#random-number").css({"text-align": "center" , "font-size": "500%"});

	var number;
	var total = 0;
	
	
	function randomNumber(min, max) 
	{
  		
  		number =  Math.floor(Math.random() * (max - min + 1) + min);
  		console.log(number);
  		
	}

	$(".gems").click(function(){
        randomNumber(1,5);
        total = total + number;
        console.log(total);
        $("#player-score").html(total);


    });


   // total = total + number;

    //console.log(total);







});
