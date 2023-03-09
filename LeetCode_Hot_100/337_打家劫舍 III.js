const rob = root => {
  const memo = new Map();
  function helper(root) {
    if (root === null) return 0;
    if (memo.has(root)) return memo.get(root);

    let robIncludeRoot = root.val;
    if (root.left) robIncludeRoot += helper(root.left.left) + helper(root.left.right);
    if (root.right) robIncludeRoot += helper(root.right.left) + helper(root.right.right);

    let robExcludeRoot = helper(root.left) + helper(root.right);
    let res = Math.max(robIncludeRoot, robExcludeRoot);
    memo.set(root, res);
    return res;
  }
  
  return helper(root);
}