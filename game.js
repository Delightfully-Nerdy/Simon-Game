var userClickedPattern

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

$.button(clicked (){
  var userChoosenColour = ("#" + randomChoosenColour)
});

$.document();
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
