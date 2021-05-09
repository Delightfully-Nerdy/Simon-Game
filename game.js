var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").clicked(function () {
  var userChoosenColour = $(this).attr("id");

  userClickedPattern.push(userChoosenColour);
});

$.document();

function playSound(name) {
  function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColours[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChoosenColour)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
  }
}
