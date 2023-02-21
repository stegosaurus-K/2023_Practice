const maxProfit = prices => {
  if (prices.length === 0) return 0;
  let minPrice = prices[0];
  let maxMoney = 0;
  for (let i = 0; i < prices.length; i++){
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxMoney) {
      maxMoney = prices[i] - minPrice
    }
  }
  return maxMoney;
}