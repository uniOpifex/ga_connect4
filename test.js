

/*- startGame-
    --game starts on red
    -player selects a column and game and token
    --game checks for win


    -- Win State
        check for horizontal, vertical, and diagnol win.
        clears board. -
        
*/
function checkForWin(columns) {
 //check for 4 in a row
 for(var i=0;i<5;i++)
 for(var j=0;j<7;j++)
  if(board[i][j]!=0&&board[i][j]==board[i+1][j]&&
  board[i][j]==board[i+2][j]&&board[i][j]==board[i+3][j])
   if(board[i][j]==1)
    return 100;
   else return -100;
    
//check for 4 in a column
for(var i=0;i<8;i++)
 for(var j=0;j<4;j++)
  if(board[i][j]!=0&&board[i][j]==board[i][j+1]&&
  board[i][j]==board[i][j+2]&&board[i][j]==board[i][j+3])
   if(board[i][j]==1)
    return 100;
   else return -100;
    
//check for 4 in a diagonal
for(var i=0;i<5;i++)
 for(var j=0;j<4;j++)
  if(board[i][j]!=0&&board[i][j]==board[i+1][j+1]&&
  board[i][j]==board[i+2][j+2]&&board[i][j]==board[i+3][j+3])
   if(board[i][j]==1)
    return 100;
   else return -100;
   
//check for 4 in the reverse diagonal
for(var i=3;i<8;i++)
 for(var j=0;j<4;j++)
  if(board[i][j]!=0&&board[i][j]==board[i-1][j+1]&&
  board[i][j]==board[i-2][j+2]&&board[i][j]==board[i-3][j+3])
   if(board[i][j]==1)
    return 100;
   else return -100;
return 0;
}
}