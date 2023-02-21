const threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1, end = nums.length - 1;
    if (i === 0 || nums[i] !== nums[i - 1]) {
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          res.push([nums[i], nums[start], nums[end]]);
          start++;
          end--;
          // 去重
          while (start < end && nums[start] == nums[start - 1]) {
            start++;
          }
          while (start < end && nums[end] == nums[end + 1]) {
            end--;
          }
        } else if (nums[i] + nums[start] + nums[end] > 0) {
          end--;
        } else {
          start++
        }
      }
    }
  }
  return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));