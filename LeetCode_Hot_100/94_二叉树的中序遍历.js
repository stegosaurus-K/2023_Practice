const inorderTraversal = root => {
  const res = [];
  function middleSequenceNode(node) {
    if (node === null) return;
    middleSequenceNode(node.left)
    res.push(node.val);
    middleSequenceNode(node.right)
  }
  middleSequenceNode(root)
  return res;
}