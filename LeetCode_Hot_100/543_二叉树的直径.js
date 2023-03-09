const diameterOfBinaryTree = root => {
  let res = 0;
  function depth(node) {
    if (!node) return 0;
    let left = depth(node.left);
    let right = depth(node.right);
    res = Math.max(left + right, res);
    return Math.max(left, right) + 1;
  }
  depth(root);
  return res;
}