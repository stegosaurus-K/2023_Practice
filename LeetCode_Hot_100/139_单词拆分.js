const wordBreak = function (s, words) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= s.length; i++){
    for (let j = 0; j < words.length; j++){
      if (i >= words[j].length) {
        if (s.slice(i - words[j].length, i) === words[j] && dp[i - words[j].length]) {
          dp[i] = true;
        }
      }
    }
  }
  return dp[s.length];
}