//on-click of the survey submit button
console.log("index.js file is loaded");
$("#submitSurvey").on("click", function (event) {
  event.preventDefault();
  console.log("this has been clicked");

  //check the validity of the form
  //make sure name/photo link are filled out
  //make sure each question is answered

  //if form is valid - create an object of the user survey
  var userInput = {
    userName: $("#name").val(),
    userPhoto: $("#photo").val(),
    surveyScore: [
      $("#Q1").val(),
      $("#Q2").val(),
      $("#Q3").val(),
      $("#Q4").val(),
      $("#Q5").val(),
      $("#Q6").val(),
      $("#Q7").val(),
      $("#Q8").val(),
      $("#Q9").val(),
      $("#Q10").val()
    ]
  };
  newFriend(userInput);
  storedFriends(userInput.surveyScore)

});

//post your data to the friends API through your api route
function newFriend() {
  $.ajax({
    url: '/api/friends',
    method: 'POST'
  }).then(function (data) {
    console.log($(JSON.stringify.data));
    // checkCompatibilty(data);
  });
}

function storedFriends(userSurvey) {
  $.ajax({
    url: '/api/friends',
    method: 'GET'
  }).then(function (allData) {
    console.log(allData);
    console.log(userSurvey);
    checkCompatibility(userSurvey, allData);
  });
}


function checkCompatibility(userSurvey, allData) {
  var bestFriend = {
    name: "",
    photo: "",
    score: 1000,
  }
  for (i = 0; i < allData.length; i++) {
    console.log("im in here")
    var storedName = allData[i].name;
    console.log(`name: ${storedName}`)
    var storedPhoto = allData[i].photo;
    console.log(`photo: ${storedPhoto}`)
    var storedScore = allData[i].scores;
    console.log(`storedScore: ${storedScore}`)
    var addedScore = 0;

    for (j = 0; j < userSurvey.length - 1; j++) {
      console.log("Beans is cute")
      var calc = Math.abs(parseInt(userSurvey[j]) - parseInt(storedScore[j]));
      console.log(`calc: ${calc}`)
      addedScore += calc;
      console.log(`addedScore: ${addedScore}`);

    }

    if (addedScore < bestFriend.score) {
      console.log("in bestfriend loop")
      bestFriend.name = storedName;
      console.log(bestFriend.name)
      bestFriend.photo = storedPhoto;
      console.log(bestFriend.photo)
      bestFriend.score = addedScore;
    }


  }
  printBestFriend(bestFriend);

}


function printBestFriend(bestFriend) {
  console.log("I’m in the best friend function!");
  //put match data in the modal
  $("#best-friend-name").text(`${bestFriend.name}`);
  $("#best-friend-photo").attr("src", bestFriend.photo);
  $("#best-friend-score").text(`Compatibility Score: ${bestFriend.score}`);

  //show the modal
  $("#best-friend-modal .modal-body").modal("show");


}

// //GENERATE SCORES
// function compareFriends() {}
