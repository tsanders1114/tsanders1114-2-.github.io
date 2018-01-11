 
 var config = {
    apiKey: "AIzaSyB3eqm7z7MMjn9d4mju1EIkwECDoxzJ1a0",
    authDomain: "trainschedule-b8560.firebaseapp.com",
    databaseURL: "https://trainschedule-b8560.firebaseio.com",
    projectId: "trainschedule-b8560",
    storageBucket: "trainschedule-b8560.appspot.com",
    messagingSenderId: "59334517139"
  };
  firebase.initializeApp(config);


 var database=firebase.database();

 $('#submitButton').on("click", function(event){
	event.preventDefault(event)

  	var newTrain = $('#name').val().trim();
  	var newDest = $('#dest').val().trim();
  	var firstTrain = $('#firstTime').val().trim();
  	var freQ = $('#freq').val().trim();

    var train={
      newTrain: newTrain,
      newDest: newDest,
      firstTrain: firstTrain,
      freQ: freQ
    }

    database.ref().push(train)
    console.log(train.newTrain)
    console.log(train.newDest)
    console.log(train.firstTrain)
    console.log(train.freQ)

  })

 database.ref().on("child_added", function(snapshot, prevChildKey) {
  var train = snapshot.val();
    console.log(train.newTrain)
    console.log(train.newDest)
    console.log(train.firstTrain)
    console.log(train.freQ)

  console.log("Previous Post ID: " + prevChildKey);
});


//console.log(train.newTrain)

//$("#trainTable > tbody").append
//$("#trainTable > tbody").append("<tr><th>"+)



