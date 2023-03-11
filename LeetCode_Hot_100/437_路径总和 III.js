
/**
 * 
 * @param {*} root 
 * @param {*} targetSum 
 *  实际上这题需要统计三个值之和：
        以 node 为起点，包含这个 「node」 本身加起来等于 sum 的路径数量之和；
        以 node.left 为起点，包含这个 「node.left」 本身加起来等于 sum 的路径数量之和；
        以 node.right 为起点，包含这个 「node.right」 本身加起来等于 sum 的路径数量之和。
 */
const pathSum = (root, targetSum) => {
  if (root === null) return 0;
  return getCount(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
}
function getCount(root, targetSum) {
  let count = 0;
  function dfs(root, sum) {
    if (root === null) return;
    sum += root.val;
    if (sum === targetSum) count++;
    dfs(root.left, sum);
    dfs(root.right, sum);
  }
  dfs(root, 0);   // 从根节点开始加，所以传入初始值为0
  return count;
}