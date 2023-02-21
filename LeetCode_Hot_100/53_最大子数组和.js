const maxSubArray = function (nums) {
  let ans = nums[0], sum = 0;
  for (let num of nums) {
    sum > 0 ? sum = sum + num : sum = num;
    ans = Math.max(ans, sum);
  }
  return ans;
}