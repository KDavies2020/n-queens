/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// consider changing tests to smaller values in order to accuretly test
// lets go one step at a time. think it through && draw it out.
// step by step interpret. you got this.
window.findNRooksSolution = function(n) {
  var output = [];
  var pieces = 0;
  var board = new Board({n:n});
  var rows = board.rows()

  var searcher = function(pieces, currentRow) {

  if(currentRow === n ){
    if(pieces === n) {
      output.push(rows)
    }
    return;
  }
  for( var i = 0; i < n; i++) {
    board.togglePiece(currentRow, i);
      if(board.hasAnyRooksConflicts()) {
        board.togglePiece(currentRow, i);
      } else {
        pieces++
        return searcher(pieces, currentRow +1);
      }

  }
  return searcher(pieces, currentRow +1)

};

searcher(pieces, 0)

  //base case
  // recursive case

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(output));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  //create a new board
  var board = new Board({n: n})


  var solutionFinder = function(rowsCount) {//inner function:
    //if no rows left
    if (rowsCount === n){
    //increment out solution count
    solutionCount++;
    return;
    //return
    };

    for (var i = 0; i < n; i++) {
      board.togglePiece(rowsCount,i);
      if (!board.hasAnyRooksConflicts()) {
          solutionFinder(rowsCount+1)
      }


        board.togglePiece(rowsCount, i)

   }
  }
  solutionFinder(0);
  // recursive case
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var output = [];
  var pieces = 0;
  var board = new Board({n:n});
  var rows = board.rows()

  var searcher = function(pieces, currentRow) {

  if(currentRow === (n*2) - 2 ){
    if(pieces === n) {
      output.push(rows)
    }
    return;
  }
  for( var i = 0; i < n; i++) {
    board.togglePiece(currentRow, i);
      if(board.hasAnyQueensConflicts()) {
        board.togglePiece(currentRow, i);
      } else {
        pieces++
        return searcher(pieces, currentRow +1);
      }

  }
  return searcher(pieces, currentRow +1)

};

searcher(pieces, 0-n+2)

  //base case
  // recursive case



  console.log('Single solution for ' + n + ' queens:', JSON.stringify(output));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n})

  var solutionFinder = function(rowsCount) {//inner function:
    //if no rows left
    if (rowsCount === n){
    //increment out solution count
    solutionCount++;
    return;
    //return
    };

    for (var i = 0; i < n; i++) {
      board.togglePiece(rowsCount,i);
      if (!board.hasAnyQueensConflicts()) {
          solutionFinder(rowsCount+1)
      }


        board.togglePiece(rowsCount, i)

   }
  }
  solutionFinder(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
