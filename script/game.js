$( document ).ready(function() {


var holey = ['#hole1', '#hole2', '#hole3', '#hole4', '#hole5', '#hole6', '#hole7'];

var interval = ['2000', '2000', '2000', '1500', '1200', '1100', '900', '900'];

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

var randomHole;
var randomTime;







$('#start').click(startGame);
console.log('Still working');


function startGame() {
  setInterval(gamePlay, 2000);
  // var stopTurn = clearInterval(gamePlay);
  // setTimeout(stopTurn, 10000);
}



function gamePlay() {
  console.log('Hello!');



  var randomHole = [Math.floor((Math.random() * holey.length)) -1];
  var randomTime = [Math.floor((Math.random() * interval.length)) -1];


function up() {

  $(holey[randomHole]).html('<img src="img/mole(2).png">');

  function down() {

    $(holey[randomHole]).html('<span>O</span>').attr('id', 'hole' + randomHole).attr('class', "hole");

  }

    setInterval(down, 1000);
    clearInterval(down);

  } up();






}
  // setInterval(gamePlay, 1000);
  // clearInterval(gamePlay);
  // setTimeout(gamePlay, 10000);



});
