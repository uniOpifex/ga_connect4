

/*- startGame-
    --game starts on red
    -player selects a column and game and token
    --game checks for win


    -- Win State
        check for horizontal, vertical, and diagnol win.
        clears board. -
        
*/

var counter= 1;
var things = '#' ;
$('.gameCol').click(function() { 
  $("#"+counter).css("background-color", "red")
  counter++;
})
