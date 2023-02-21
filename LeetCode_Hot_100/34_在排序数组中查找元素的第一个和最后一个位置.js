const searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  let firstPosition = getFirstPosition(nums, target);
  if (firstPosition === -1) return [-1, -1]
  let lastPosition = getLastPosition(nums, target);
  return [firstPosition, lastPosition]
}

function getFirstPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) >>> 1);
    if (nums[mid] < target) {
      left = mid + 1; // 下一轮的搜索区间[mid + 1, right]
    } else if (nums[left] === target) {
      right = mid; // 下一轮的搜索区间[left, mid]
    } else {
      right = mid - 1;  //下一轮的搜索区间[left, mid - 1]
    }
  }
  // 有可能不存在target
  if (nums[left] === target) return left;
  return -1;
}

function getLastPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right + 1) >>> 1);
    if (nums[mid] < target) {
      left = mid + 1; // 下一轮的搜索区间[mid + 1, right]
    } else if (nums[mid] === target) {
      left = mid; // 下一轮的搜索区间[left, mid]
    } else {
      right = mid - 1;  //下一轮的搜索区间[left, mid - 1]
    }
  }
  return left;
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 9))