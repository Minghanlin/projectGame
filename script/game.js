$( document ).ready(function() {


var holey = ['#hole1', '#hole2', '#hole3', '#hole4', '#hole5', '#hole6', '#hole7'];

var interval = ['2000', '2000', '2000', '1500', '1200', '1100', '900', '500'];


var turn = 0;
var playerOneScore = 0;
var playerTwoScore = 0;
var gameLoop;
var randomHole;
var randomTime;


function nextClick() {

  $('#start').html('Next Player Start');
  $('#start').css('font-size', '30px');

}

// function backStart() {
//   $('#start').html('Start');
//   $('#start').css('font-size', '90px');
// }

function checkWin() {
  if(playerOneScore > playerTwoScore) {
    $('#start').html('Player One Wins');
    $('#start').css('font-size', '30px');
  } else if (playerOneScore < playerTwoScore) {
    $('#start').html('Player Two Wins');
    $('#start').css('font-size', '30px');
  } else if (playerOneScore === playerTwoScore) {
    $('#start').html('Nobody Wins!');
    $('#start').css('font-size', '30px');
  }
}

// to bring mole up

function up(randomHole) {

  $(holey[randomHole]).html('<img src="img/mole(2).png">');
  $(holey[randomHole]).addClass('moleHole');
  // $('.moleHole').css("height", "375px");
  // $('.moleHole').css("width", "125px");
  // $('.moleHole').css("margin-bottom", "15px");
  // $('.moleHole').css("margin-left", "5px");

  //$( this ).css( "width", "+=200" );
  // $(holey[randomHole]).attr('src', 'img/mole(2).png');
  //document.getElementById("myDIV").className += " anotherClass";
//$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );

}

// to bring mole down

function down(randomHole) {

  $(holey[randomHole]).html('<span>O</span>').attr('class', "hole");
  $(holey[randomHole]).removeClass('moleHole');
  //$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );

}

function bringDown() {
down(randomHole);
console.log("num2  " + randomHole);
}

function nextTurn() {
  $(holey[0]).html('<span>O</span>').attr('id', 'hole1').attr('class', "hole");
  $(holey[1]).html('<span>O</span>').attr('id', 'hole2').attr('class', "hole");
  $(holey[2]).html('<span>O</span>').attr('id', 'hole3').attr('class', "hole");
  $(holey[3]).html('<span>O</span>').attr('id', 'hole4').attr('class', "hole");
  $(holey[4]).html('<span>O</span>').attr('id', 'hole5').attr('class', "hole");
  $(holey[5]).html('<span>O</span>').attr('id', 'hole6').attr('class', "hole");
  $(holey[6]).html('<span>O</span>').attr('id', 'hole7').attr('class', "hole");
}

// Player one scores when click happens when holey[x] is mole img

var holex = document.getElementsByClassName('hole');
for (var i = 0; i < holex.length; i++) {
  holex[i].addEventListener('click', toScore);
}
function toScore() {
console.log("toScore works");
if ($('#' + event.target.id).hasClass("moleHole")) {
  console.log('hashole');
  if (turn === 1) {
    playerOneScore++;
    $('#player1score').html(playerOneScore);
    ($('#' + event.target.id).html('<span>O</span>').attr('class', "hole"));
  }
  else if (turn === 2) {
    playerTwoScore++;
    $('#player2score').html(playerTwoScore);
    ($('#' + event.target.id).html('<span>O</span>').attr('class', "hole"));
  }


}
}

// if (turn === 1) {
//   $('#start').html("Player 1's Turn");
//   $('#start').css('font-size', '30px');
// }
// if (turn ===2) {
//   $('#start').html("Player 2's Turn");
//   $('#start').css('font-size', '30px');
// }


// click start to start game

$('#start').click(startGame);
console.log('Still working');


function startGame() {

  gameLoop  = setInterval(gamePlay, 2000);

  setTimeout(clearing, 45000);
  $('#start').click(nextTurn);
  turn++;
}



// Stop gameloop

function clearing() {
clearInterval(gameLoop);
nextClick();
}





// main gameplay loop

function gamePlay() {

  console.log('Hello!');

  randomHole = [Math.floor((Math.random() * holey.length))];
  randomTime = [Math.floor((Math.random() * interval.length))];

  up(randomHole);
  if($(holey[randomHole]).html('<img src="img/mole(2).png">')) {
    console.log('its up!!');
    setTimeout(bringDown, interval[randomTime]);
    console.log("num1  " + randomHole);
  }
  if (turn === 1) {
    $('#start').html("Player 1's Turn");
    $('#start').css('font-size', '30px');
  }
  if (turn === 2) {
    $('#start').html("Player 2's Turn");
    $('#start').css('font-size', '30px');
  }

  if (turn === 3) {
    checkWin();
  }


}





});
