const convertBST = root => {
  let sum = 0;
  function dfs(root) {
    if (root === null) return;
    dfs(root.right);
    sum += root.val;
    root.val = sum;
    dfs(root.left);
  }
  dfs(root);
  return root;
}