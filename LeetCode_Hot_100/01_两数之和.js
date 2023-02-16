const twoSum = function (target, nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i);  // 存储当前值和其索引
    }
  }
  return null;
}
let arr = [1, 6, 2, 5]
console.log(twoSum(7, arr));
console.log(twoSum(8, arr));
console.log(twoSum(9, arr));