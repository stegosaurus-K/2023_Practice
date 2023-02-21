const canJump = function (nums){
  let end = nums.length - 1; // 必须到达数组的最后一个下表索引
  for (let i = nums.length - 2; i >= 0; i--){
    if (end - i <= nums[i]) {
      end = i;
    }
  }
  return end === 0;
}
console.log(canJump([3, 2, 1, 0, 4]))