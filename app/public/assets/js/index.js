//on-click of the survey submit button
console.log("index.js file is loaded");
$("#submitSurvey").on("click", function(event) {
  event.preventDefault();
  console.log("this has been clicked");

  //check the validity of the form
  //make sure name/photo link are filled out
  //make sure each question is answered

  //if form is valid - create an object of the user survey
  var userInput = {
    name: $("#name").val(),
    photo: $("#photo").val(),
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
  console.log(userInput);
});

//post your data to the friends API through your api route

// function newFriend(userData) {
//   $.get("/api/friends", userData, function(data) {
//     console.log("Posting Friend Data" + data);
//     //name
//     //photo
//     //compare
//   });
//   compareFriends;
// }

// //GENERATE SCORES
// function compareFriends() {}
