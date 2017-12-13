


function submitAnswers(){
	var total = 5;
	var score = 0;
	var q1 = document.forms["quizform"]["q1"] .value;
	var q2 = document.forms["quizform"]["q2"] .value;
	var q3 = document.forms["quizform"]["q3"] .value;
	var q4 = document.forms["quizform"]["q4"] .value;
	var q5 = document.forms["quizform"]["q5"] .value;
	
	for(i = 1; i <= total; i ++){
		if(eval('q' + i) == null || eval('q' + i) ==''){
			alert("You Missed question"  +  i);
			return false;
		}
	}
	
	var answers =["a","b","c","b","c"];
	for(i = 1; i <= total; i ++)
		if('q'+ 1) == answers[i-1]{
			score++;
	
		}
	}		
var results= document.getElementById("#results");
results.innerHTML="<h3>You scored <span> + score + </span> out of <span> + total + '</span></h3>";
 	alert("You scored"  + score +  "out of  + total");
		
			
};

