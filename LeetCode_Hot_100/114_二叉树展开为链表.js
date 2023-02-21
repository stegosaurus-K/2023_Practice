// 思路：先处理左子树，一次遍历到左子树的最后一个右子树，使该右子树的right指向root.right
//      再root.right = root.left, root.left = null, root = root.right,\
//      反复以上操作，直至处理完所有左子树

const flaten = function (root) {
  while (root) {
    let p = root.left;
    if (p) {  // 处理左子树
      while (p.right) { p = p.right }
      p.right = root.right;
      root.right = root.left;
      root.left = null;
    }
    root = root.right; // 往后处理左子树
  }
}