// 方法一 递归判断
// 思路
//   判断二叉树是不是对称的，主要是看二叉树左边和右边的节点是不是各自相等。所以我们可以通过递归，
//   去判断左树的左节点和右树的右节点是不是相同。如果两个节点都为空，则表示递归到树的底部了；
//   如果有一边空了另外一半没空，说明有一边的节点没了，另外一半还在，肯定不是对称的树；
//   如果两边对称，继续递归节点的左右节点，直到递归完全或者发现不对称。
// 详解
//    1.我们判断当前的树结构还是否为空，为空则该树是对称的，不为空则递归判断左子树的左节点和右子树的右节点是否相等
//    2.如果左节点或右节点为空时，则判断对应的右节点或左节点是否为空，为空则返回 true，不为空则返回 false
//    3.如果左右节点都不为空时，则判断左节点的左节点和右节点的右节点是否相等
//    4.如果相等，则继续传入该节点的子节点去判断；不相等则直接返回 false

const isSymmetric = root => {
  if (root === null) return true;
  return isSame(root.left, root.right);
}
function isSame(l, r) {
  if (l === null) return r === null;
  if (r === null) return l === null;
  if (l.val !== r.val) return false;
  return isSame(l.left, r.right) && isSame(l.right, r.left);
}