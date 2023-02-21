const singleNumber = nums => {
  let ans = 0;
  for (let num of nums) {
    ans ^= num;
  }
  return ans;
}