function nextPermutation(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
  return nums;
}
console.log(nextPermutation([1, 4, 3, 2]))

/**
 * [4,3,2,1]
 *  i = nums.length - 2 = 4 - 2 = 2;
 *  l = 0; r = 3
 *  nums  = [1,3,2,4]
 *  l = 1; r = 2
 *  nums = [1,2,3,4]
/*
*[1, 4, 3, 2]
 * i = nums.length - 2 = 4 - 2 = 2
 * 结束while循环 i = 0
 * j = nums.length - 1 = 4 - 1 = 3
 * nums = [2,4,3,1]
 * l = i + 1 = 0 + 1 = 1;
 * r = nums.length - 1 = 4 - 1 = 3
 * nums = [2,1,3,4]
 * l = 2, r = 2
 *
     [1,3,4,2]
    i = nums.length - 2 = 4 - 2 = 2
    结束while循环 i = 1
    j = nums.length - 1 = 4 - 1 = 3
    nums[3] <= nums[1],  j = 2
    nums = [1,4,3,2]
    l = i + 1 = 2,
    r = nums.length - 1 = 4 - 1 = 3,
    nums = [1,4,2,3]
 */
