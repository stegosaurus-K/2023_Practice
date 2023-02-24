const majorityElement = nums => {
  let temp = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === temp) {
      count++;
    } else {
      count--;
      if (count === 0) {
        temp = nums[i + 1];
        count = 1;
        i++;
      }
    }
  }
  return temp;
}