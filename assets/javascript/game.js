$(document).ready(function(){

	var wins = 0;
	var loses = 0;
	var addition = 0;
			// This will populate a number between 19 and 120
	var total = Math.floor((Math.random() * 100) + 19);
		console.log(total);
			// This will populate a number between 1 and 12
	var orange = Math.floor((Math.random() * 12) + 1);
	var white = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);
	var blue = Math.floor((Math.random() * 12) + 1);

	console.log(orange);console.log(white);console.log(green);console.log(blue);

	var addUpdate = function(){
		$('.addition').empty();
		$(".addition").apped(addition);
		$('#wins').empty();
		$('#wins').apped(wins);
		$('#loses').empty();
		$('#loses').apped(loses);
	}

	var reset = function(){
		addition = 0;
		total = Math.floor((Math.random() * 100) + 19);
		
		$('.total').empty();
		$('.total').apped(total);

	var orange = Math.floor((Math.random() * 12) + 1);
	var white = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);
	var blue = Math.floor((Math.random() * 12) + 1);

	}

	var game = function (){
		if (addition === total){
			wins = wins + 1;
			alert("You've Won!");
			reset();
			} else if (addition > total) {
				loses = loses + 1;
				alert("You lose!");
			} else {
				addUpdate();
			}		
		}		
			



});