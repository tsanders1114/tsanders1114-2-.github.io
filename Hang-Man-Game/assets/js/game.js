//Create an Array of Words
//Choose Word randomly
//Create Scores based on length of Words
//Get user choices or guess
//Check if guess is right 
//if right push to right array 
//if wrong push to wrong array

//Array of Words
var foods= ['apples', 'chicken', 'beef', 'pork', 'oranges','carrots','potpie','sweetcorn','kale',];

var Scores=[];
var rightWord= [];
var wrongWord= [];
var foodsRandom = Math.floor(Math.random()*foods.length);
var choosenFood= foods[foodsRandom];

console.log(choosenFood);


var populateScores=()=>{
	for (var i=0; i < choosenFood.length; i++){
		Scores.push('_');
	}
	return Scores;
}

console.log(populateScores());

document.addEventListener('keypress', (event) => {
	var keyword = String.fromCharCode(event.keycode);
	console.log(choosenFood.indexOf(keyword));

	if (choosenFood.indexOf(keyword) > -1) {
		rightWord.push(keyword);
		console.log(rightWord);
	
		wrongWord.push(keyword);
		console.log(wrongWord);
 	}
});



