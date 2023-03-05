const findDuplicate = nums => {
  let slow = 0, fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      fast = 0;
      while (true) {
        if (fast === slow) return slow;
        slow = nums[slow];
        fast = nums[fast];
      }
    }
  }
}
console.log(findDuplicate([4, 3, 1, 4, 2]))