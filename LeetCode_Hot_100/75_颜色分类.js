
const sortColors = function (nums) {
  function swap(a, b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
  let m = 0, i = 0, n = nums.length - 1;
  while (i <= n) {
    if (nums[i] === 0) {
      swap(i, m);
      i++;
      m++;
    } else if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      swap(i, n);
      n--;
    }
  }
  return nums;
};
console.log(sortColors([2, 0, 2, 1, 1, 0]))