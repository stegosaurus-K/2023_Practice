// 解题思路
//   1、用双指针维护一个滑动窗口，用来剪切子串。
//   2、不断移动右指针，直到遇到重复字符的时候把左指针移到前面的重复字符的下一位。（相当于把前面的重复字符删除）
//   3、移动指针过程中，记录窗口长度的最大值即为答案。
const lengthOfLongestSubstring = function (string) {
  let left = 0;
  let result = 0;
  const map = new Map();
  for (let right = 0; right < string.length; right++){
    if (map.has(string[right]) && map.get(string[right]) >= left) {
      left = map.get(string[right]) + 1;
    }
    result = Math.max(result, right - left + 1);
    map.set(string[right], right);
  }
  return result;
}