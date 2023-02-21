const uniquePaths = (m, n) => {
  // 创建一个二位数组
  const array = new Array(m);
  for (let i = 0; i < m; i++) {
    array[i] = new Array(n);
  }
  // 把第一行变成1
  for (let i = 0; i < n; i++) {
    array[0][i] = 1;
  }// 把第一列变成1
  for (let i = 0; i < m; i++) {
    array[i][0] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      array[i][j] = array[i - 1][j] + array[i][j - 1];
    }
  }
  return array[m - 1][n - 1];
}
console.log(uniquePaths(3,7))