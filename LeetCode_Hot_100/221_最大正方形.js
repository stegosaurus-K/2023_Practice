const maximalSquare = matrix => {
  let maxSide = 0;
  const dp = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = new Array(matrix[0].length).fill(0);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
        }
        maxSide = Math.max(maxSide, dp[i][j]);

      }
    }
  }
  return maxSide * maxSide;
}