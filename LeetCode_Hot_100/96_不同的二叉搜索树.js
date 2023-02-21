// 动态规划
// const numTrees = n => {
//   // 创建一个长度为n+1的数组，是因为下标从0开始，要返回dp[n]
//   const dp = new Array(n+1).fill(0);
//   dp[0] = 1;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++){
//     for (let j = 0; j <= i - 1; j++){
//       dp[i] += dp[j] * dp[i - j - 1];
//     }
//   }
//   return dp[n];
// }
// console.log(numTrees(3));


// 递归
const numTrees = n => {
  if (n <= 1) return 1;
  let num = 0;
  for (let i = 0; i < n; i++){
    num += numTrees(i) * numTrees(n - i - 1);
  }
  return num;
}
console.log(numTrees(3));