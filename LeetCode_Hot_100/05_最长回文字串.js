const longestPalindrome = function (string) {
  if (string.length < 2) return string;
  let start = 0, maxLength = 1;
  const expandAroundCenter = function (left, right) {
    while (left >= 0 && right < string.length && string[left] === string[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < string.length; i++) {
    expandAroundCenter(i - 1, i + 1);
    expandAroundCenter(i, i + 1);
  }
  return string.slice(start, start + maxLength);
}