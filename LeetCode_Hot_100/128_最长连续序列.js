/**
 * 思路：遍历数组，用哈希表存储遍历到的数字（key）和当前值的连续序列（value）
 * 连续序列长度 = 前一数字的连续序列长度 + 后一数字连续序列长度 + 1（map.get(num-1) + map.get(num+1) + 1）
 * @param {*} nums 
 * @returns 
 */

const longestConsecutive = nums => {
  if (nums.length === 0) return 0;
  const map = new Map();
  let max = 0;  // 初始化最长长度
  for (let num of nums) { // 遍历当前数组
    if (!map.has(num)) { // 重复元素不考虑
      let preLen = map.get(num - 1) || 0; // 获取一数字的连续序列长度
      let nextLen = map.get(num + 1) || 0; // 获取后一数字连续序列长度
      let curLen = preLen + nextLen + 1; // 当前最长序列长度
      map.set(num, curLen); // 存储当前序列的最长长度
      max = Math.max(max, curLen); // 更新最长序列长度
      map.set(num - preLen, curLen); // 更新前最远数字的长度
      map.set(num + nextLen, curLen);// 更新后最远数字的长度
    }
  }
  return max;
}