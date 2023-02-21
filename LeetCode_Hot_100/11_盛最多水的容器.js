const maxArea = function (height) {
  let max = 0, left = 0, right = height.length - 1;
  const area = function (l, r) {
    return (r - l) * Math.min(height[r], height[l]);
  }
  while (left < right) {
    let temp = area(left, right);
    temp > max && (max = temp);
    height[left] <= height[right] ? left++ : right--;
  }
  return max;
}