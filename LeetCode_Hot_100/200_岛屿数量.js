const numIslands = grid => {
  let count = 0
  function helper(row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0") return;
    grid[row][col] = "0";
    helper(row - 1, col);
    helper(row + 1, col);
    helper(row, col - 1);
    helper(row, col + 1);
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++){
      if (grid[row][col]) {
        count++;
        helper(row, col);
      }
    }
  }
  return count;
}