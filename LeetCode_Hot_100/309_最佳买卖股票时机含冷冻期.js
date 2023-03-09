const maxProfit = prices => {
  const n = prices.length;
  if (n === 0) return 0;
  const hold = new Array(n);
  const unhold = new Array(n);
  hold[0] = -prices[0];
  unhold[0] = 0;
  for (let i = 1; i < n; i++) {
    i === 1
      ? hold[i] = Math.max(hold[i - 1], -prices[i])
      : hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i]);
    unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i]);
  }
  return unhold[n - 1];
}