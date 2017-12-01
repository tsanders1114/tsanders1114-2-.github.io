var alphLetter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Ok so the user presses a key to match the cpu guess
	var alphLetter2=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var Wins=0;
	var Losses=0;
	var guessLeft=10;


	var cpuChoice= alphLetter[Math.floor(Math.random() * alphLetter.length)];



document.onkeyup = function() {
    var userPick = String.fromCharCode(event.keyCode).
    toLowerCase();
    console.log(userPick);
}


    if (userPick === cpuChoice){
    	console.log('You Win'''Wins++);
    }else if(guessLeft --);{
    	console.log('You Lose'''Losses++);
    }


    if (userPick === cpuChoice){
        console.log('You Win'''Wins++);
    }else if(guessLeft --);{
        console.log('You Lose'''Losses++);