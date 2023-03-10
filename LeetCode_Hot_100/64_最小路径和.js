const minPathSum = function (grid) {
  let row = grid.length, col = grid[0].length;
  // 第一列
  for (let i = 1; i < col; i++) {
    grid[0][i] += grid[0][i - 1];
  }
  for (let i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[row - 1][col - 1];
}
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]))