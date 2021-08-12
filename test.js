const robotPath = (r, c) => {
  if (r === 1 || c === 1) return 1;

  //robot is always start at [0,0]

  //robot can only move either right x+1 or down y+1

  //create a count variable
  let count = 0;

  //create helper function

  const helper = (x, y) => {

    //if the robot is in the goal
    if (x === r - 1 && y === c - 1) {
      //increment the count
      count++;
      //return
      return;
    }

    //if in are not at the end of row
    if (x + 1 !== r) {
      //call the helper function with x + 1 with same y
      helper(x + 1, y);
    }

    //if in are not at the end of column
    if (y + 1 !== c) {
      //call the helper function with same x and y + 1
      helper(x, y + 1);
    }
  };

  //call the helperfunction with robot placement
  helper(0, 0);

  //return the count
  return count;

};