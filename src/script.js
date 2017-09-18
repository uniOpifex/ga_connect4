

/*- startGame-
    --game starts on red
    -player selects a column and game and token
    --game checks for win


    -- Win State
        check for horizontal, vertical, and diagnol win.
        clears board. -
        
*/

$(".arow").click(function(){
    var col = $(this).index();
  console.log(col)
    
    
    var activePlayer = $(this).closest(".gameBoard").data("activeplayer"); 
    //Get First available slot
    var cells = $(" .gameBoard .arow div:nth-child(" + (col+1)  +")");
    
    var cell;
    for(var i = cells.length -1; i > -1; i--)
    {
        if($(cells[i]).data("token") == undefined)
        {
            cell = cells[i];
            break;
        }
    }
    
    $(cell).data("token", activePlayer).addClass(activePlayer);      
   
    
    //Toggle Active Player 
    activePlayer = activePlayer == "red" ? "blue" : "red";
    $(this).closest(".gameBoard").toggleClass("red blue").data("activeplayer", activePlayer);
    

});
