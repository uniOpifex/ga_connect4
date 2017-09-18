

/*- startGame-
    --game starts on red
    -player selects a column and game and token
    --game checks for win


    -- Win State
        check for horizontal, vertical, and diagnol win.
        clears board. -
        
*/
$(".startGame").click(function() {});
var blueScore = 0;
var redScore = 0;
var columns = ["", "", "", "", "", "", ""];
$(".gameCol").on("click", function() {
  activeFunction(this);
});

function activeFunction(id) {
  
  var col = $(id).index();
  var activePlayer = $(id).closest(".gameWrap").data("activeplayer");
  //^ sets our activePlayer var to the current data-attr of our gameWrap Div

  //Get First available slot
  var cells = $(".gameCol")[col].children;
  //var cells = $(".gameCol div:nth-child(" + (col+1)  +")");
  var cell;
  function changeGrid(row, ch, columns) {
    var index = 0;
    row;
    // for(i = 0; i < columns.length; i++){
    switch (row) {
      case 0:
        columns[row] += ch;
        break;
      case 1:
        columns[row] += ch;
        break;
      case 2:
        columns[row] += ch;
        break;
      case 3:
        columns[row] += ch;
        break;
      case 4:
        columns[row] += ch;
        break;
      case 5:
        columns[row] += ch;
        break;
    }
    return columns;
  }
  
  for (var i = cells.length - 1; i > -1; i--) {
    if ($(cells[i]).data("token") == undefined) {
      cell = cells[i];
      console.log(cells[i]);
      break;
    }
    console.log(cells);
  }

  if (activePlayer === "red") {
    changeGrid(col, "r", columns);
  } else {
    changeGrid(col, "b",columns);
  }

  if (checkForWinVerts(columns) == true) {
    alert(activePlayer + "Wins");
    location.reload(true);
  } else { console.log(columns)
  }

  //^ takes the children elements of the collumns selected and hold them in cells
  //- every time board is clicked it updates the highest(child) undefined cell in the selected col

  $(cell).data("token", activePlayer).addClass(activePlayer);
  //^ sets the selected token div to class of the activePlayer

  //Toggle Active Player
  activePlayer = activePlayer == "red" ? "blue" : "red";
  $(id)
    .closest(".gameWrap")
    .toggleClass("red blue")
    .data("activeplayer", activePlayer);
  // if active player eauals itself update to other option
  function reset() {
    if (checkForWinVerts(columns) == true) {
      checkForWinVerts(columns);
      columns = ["", "", "", "", "", "", ""];
      $(".gameCol .token").removeClass("blue");
      $(".gameCol .token").removeClass("red");
    }
  }


  function startGame() {
    console.log(Dialog.startDialog);
  }
  function gameLoop() {
    counter = 1;
    count = 0;
    while (counter < 10) {
      if (counter % 2 !== 0) {
        console.log("make a choice player1");
        var choice1 = prompt("make a choice player1");
        changeGrid(choice1, "1");
        counter++;
        count++;
      } else {
        console.log("make a choice player2");
        var choice2 = prompt("make a choice player2");
        changeGrid(choice2, "2");
        counter++;
        count++;
      }
    }
  }
  function checkForWinVerts(inputs) {
    for (var i in inputs) {
      if (/(.)\1\1\1/.test(inputs[i])) {
        console.log("you Win");
        return true;
      } else {
      }
    }
    return false;
  }

  function checkForWinHortz(array) {
    let newArr = array;
    function convert(inputs) {
      var index = "";
      var i = 0;
      for (let a in inputs[i]) {
        for (let i in inputs) {
          //array[i][a]
          index += inputs[i][a] ? inputs[i][a] : "";
        }
        newArr.push(index);
        index = "";
      }
      return newArr;
    }
    convert(newArr);
    console.log(newArr);
  }
  var Dialog = {
    startDialog: "This is connect4 \nplayer1 goes first"
  };

  reset();
}

$("#resetBoard").click(function() {
  cells = [];
  cell = [];
  columns = [];
  $(".gameCol .token").removeClass("blue");
  $(".gameCol .token").removeClass("red");
});

function startGame() {
  console.log(Dialog.startDialog);
}
function gameLoop() {
  counter = 1;
  count = 0;
  while (counter < 10) {
    if (counter % 2 !== 0) {
      console.log("make a choice player1");
      var choice1 = prompt("make a choice player1");
      changeGrid(choice1, "1");
      counter++;
      count++;
    } else {
      console.log("make a choice player2");
      var choice2 = prompt("make a choice player2");
      changeGrid(choice2, "2");
      counter++;
      count++;
    }
  }
}
function checkForWinVerts(inputs) {
  for (var i in inputs) {
    if (/(.)\1\1\1/.test(inputs[i])) {
      console.log("you Win");
      return true;
    } else {
    }
  }
  return false;
}

function checkForWinHortz(array) {
  let newArr = array;
  function convert(inputs) {
    var index = "";
    var i = 0;
    for (let a in inputs[i]) {
      for (let i in inputs) {
        //array[i][a]
        index += inputs[i][a] ? inputs[i][a] : "";
      }
      newArr.push(index);
      index = "";
    }
    return newArr;
  }
  convert(newArr);
  console.log(newArr);
}
var Dialog = {
  startDialog: "This is connect4 \nplayer1 goes first"
};


  $("#resetBoard").on("click",function() {
   
    $(".gameCol .token").removeClass("blue");
    $(".gameCol .token").removeClass("red");
    $(".gameCol").off('click');
}).off("click", function() {
   $(".gameCol").on("click", function() { 
    activeFunction(this);
  })})

