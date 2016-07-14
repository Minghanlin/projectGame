$( document ).ready(function() {


var holey = ['#hole1', '#hole2', '#hole3', '#hole4', '#hole5', '#hole6', '#hole7'];

var interval = ['2000', '2000', '2000', '1500', '1200', '1100', '900', '500'];

// $(holey[0]).html('<img src="img/mole(2).png">');
// $(holey[1]).html('<img src="img/mole(2).png">');
// $(holey[2]).html('<img src="img/mole(2).png">');
// $(holey[3]).html('<img src="img/mole(2).png">');
// $(holey[4]).html('<img src="img/mole(2).png">');
// $(holey[5]).html('<img src="img/mole(2).png">');
// $(holey[6]).html('<img src="img/mole(2).png">');

var turn = 0;
var playerOneScore = 0;
var playerTwoScore = 0;
var id1;
var randomHole;
var randomTime;




function up(randomHole) {

  $(holey[randomHole]).html('<img src="img/mole(2).png">');
  // $(holey[randomHole]).attr('src', 'img/mole(2).png');


}

function down(randomHole) {

  $(holey[randomHole]).html('<span>O</span>').attr('id', 'hole' + randomHole).attr('class', "hole");

}

function test() {
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






$('#start').click(startGame);
console.log('Still working');


function startGame() {
  id1  = setInterval(gamePlay, 2000);

  setTimeout(clearing, 45000);
  turn++;
  $('#start').click(nextTurn);
  // var stopTurn = clearInterval(gamePlay);
  // setTimeout(stopTurn, 10000);
  // clearTimeout(gamePlay, 10000);


}
function clearing() {
clearInterval(id1);
}
function gamePlay() {
  console.log('Hello!');

  randomHole = [Math.floor((Math.random() * holey.length))];
  randomTime = [Math.floor((Math.random() * interval.length))];

  up(randomHole);
  if($(holey[randomHole]).html('<img src="img/mole(2).png">')) {
    console.log('its up!!');
    setTimeout(test, interval[randomTime]);
    console.log("num1  " + randomHole);
  }
}
  // setInterval(down(randomHole), 3000);
  // clearInterval(down(randomHole));
  // setTimeout(down(randomHole), 2000);




  // setInterval(gamePlay, 1000);
  // clearInterval(id1);
  // setTimeout(gamePlay, 10000);



});
