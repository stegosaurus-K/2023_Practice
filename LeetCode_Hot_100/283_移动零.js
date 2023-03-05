const moveZeroes = nums => {
  let j = 0, temp = '';
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++
    }
  }
  return nums;
}
console.log(moveZeroes([2, 1, 0, 3, 12,0,4,2]))