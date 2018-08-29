const colors = ["green", "red"]

var turn = 0;

var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

var scores = [0,0]

function displayTurn() {
  displayMessage("It is <div class='pebble " + colors[turn] + "'></div>'s turn");
}

function displayMessage(message) {
  document.getElementById('ui').innerHTML = message;
}

function displayPebble(column, row) {
  var pebble = document.createElement('div');
  pebble.classList.add("pebble");
  pebble.classList.add(colors[turn]);
  var columnElement = document.getElementById("column-" + column);
  columnElement.appendChild(pebble);
}

function checkForScore(column, row) {
  //check for horizontal winner
  var x, y, flag;
  flag = false;
  for (x = 0; x < 3; x++)
  {
    flag &= board[x][row] === turn
  }
  if(flag) score[turn] += 10;
}

function dropPebble(columnIndex) {
  for(var i = 2; i>-1; i--) {
    if(board[columnIndex][i] === null) {
      board[columnIndex][i] = turn;
      displayPebble(columnIndex, i);
      turn = (turn + 1) % 2;
      displayTurn();
      return;
    }
  }
    //cannot drop pebble
     displayMessage('You cannot put a pebble there - the column is full');
     setTimeout(displayTurn, 2000);
}



for(var i = 0; i < 3; i++) {
  const col = i;
  document.getElementById('column-' + col)
    .addEventListener('click', function(event) {
      event.preventDefault();
      dropPebble(col);
    });
}
