const search = function (nums, target) {
  if (nums.length === 0) return -1;
  let peakIndex = findPeakIndex(nums);
  if (target >= nums[0] && target <= nums[peakIndex]) {
    return binarySearch(nums, 0, peakIndex, target);
  } else {
    return binarySearch(nums, peakIndex + 1, nums.length - 1, target);
  }
}
function findPeakIndex(arr) {
  if (arr.length === 0) return -1;
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] > arr[mid + 1]) return mid;
    else if (arr[mid] >= arr[left]) left = mid + 1;
    else right = mid - 1
  }
  return 0;
}
function binarySearch(arr, left, right, target) {
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] >= target) right = mid - 1;
    else left = mid + 1;
  }
  return -1
}