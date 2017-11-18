
	var wins = 0;
	var losses = 0;
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
		$(".addition").append(addition);
		$('#Wins').empty();
		$('#Wins').append(wins);
		$('#Losses').empty();
		$('#Losses').append(losses);
	}

	var reset = function(){
		addition = 0;
		total = Math.floor((Math.random() * 100) + 19);
		
		$('.total').empty();
		$('.total').append(total);

	 orange = Math.floor((Math.random() * 12) + 1);
	 white = Math.floor((Math.random() * 12) + 1);
	 green = Math.floor((Math.random() * 12) + 1);
	 blue = Math.floor((Math.random() * 12) + 1);
	addUpdate();
	console.log(orange);console.log(white);console.log(green);console.log(blue);
	}

	var game = function (){
		if (addition === total){
			wins = wins + 1;
			alert("You've Won!");
			reset();
			} else if (addition > total) {
				losses = losses + 1;
				alert("You lose!");
				reset();
			} else {
				addUpdate();
			}		
		}

		$('.total').append(total);
		$('.addition').append(addition);

$(document).ready(function(){

		$('#orange').click(function(){
			addition = addition + orange;
			game();
			})
			$('#white').click(function(){
			addition = addition + white;
			game();
			})
			$('#green').click(function(){
			addition = addition + green;
			game();
			})
			$('#blue').click(function(){
			addition = addition + blue;
			game();
		})

});